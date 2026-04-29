-- ================================================
-- eFood — Schema Supabase (executar no SQL Editor)
-- ================================================

-- Tabela de favoritos
CREATE TABLE IF NOT EXISTS favorites (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  restaurant_id INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, restaurant_id)
);

-- Tabela de avaliações
CREATE TABLE IF NOT EXISTS reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  user_name TEXT NOT NULL,
  restaurant_id INTEGER NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
  comment TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de histórico de pedidos
CREATE TABLE IF NOT EXISTS order_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  restaurant_name TEXT NOT NULL DEFAULT '',
  items JSONB NOT NULL,
  total NUMERIC(10,2) NOT NULL,
  delivery_address TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes para performance
CREATE INDEX IF NOT EXISTS idx_favorites_user ON favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_reviews_restaurant ON reviews(restaurant_id);
CREATE INDEX IF NOT EXISTS idx_order_history_user ON order_history(user_id);

-- RLS (Row Level Security) — cada user só vê os seus dados
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_history ENABLE ROW LEVEL SECURITY;

-- Policies: favoritos
CREATE POLICY "Users can view own favorites" ON favorites
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own favorites" ON favorites
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own favorites" ON favorites
  FOR DELETE USING (auth.uid() = user_id);

-- Policies: avaliações (todos podem ler, só o autor pode escrever)
CREATE POLICY "Anyone can view reviews" ON reviews
  FOR SELECT USING (true);
CREATE POLICY "Users can insert own reviews" ON reviews
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policies: histórico de pedidos
CREATE POLICY "Users can view own orders" ON order_history
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own orders" ON order_history
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ================================================
-- menu_items — Tabela relacional para itens do cardápio
-- Migração do campo JSONB restaurants.cardapio
-- ================================================

CREATE TABLE IF NOT EXISTS menu_items (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  restaurant_id INTEGER NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
  nome TEXT NOT NULL,
  descricao TEXT NOT NULL DEFAULT '',
  preco NUMERIC(10,2) NOT NULL,
  porcao TEXT NOT NULL DEFAULT '',
  foto TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_menu_items_restaurant ON menu_items(restaurant_id);

ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read menu_items" ON menu_items
  FOR SELECT USING (true);

CREATE POLICY "Auth write menu_items" ON menu_items
  FOR ALL USING (auth.role() = 'authenticated');

-- Migrar dados existentes do JSONB para a nova tabela
INSERT INTO menu_items (restaurant_id, nome, descricao, preco, porcao, foto)
SELECT
  r.id,
  (item->>'nome')::TEXT,
  COALESCE((item->>'descricao')::TEXT, ''),
  (item->>'preco')::NUMERIC,
  COALESCE((item->>'porcao')::TEXT, ''),
  COALESCE((item->>'foto')::TEXT, '')
FROM restaurants r,
  jsonb_array_elements(r.cardapio) AS item
WHERE r.cardapio IS NOT NULL
  AND jsonb_array_length(r.cardapio) > 0;

-- Após confirmar a migração, remover a coluna JSONB:
-- ALTER TABLE restaurants DROP COLUMN IF EXISTS cardapio;
