-- Criação da tabela restaurants
create table if not exists restaurants (
  id serial primary key,
  titulo text not null,
  destacado boolean default false,
  tipo text not null,
  avaliacao numeric(2,1) not null,
  descricao text not null,
  capa text not null,
  foto text not null,
  infos text[],
  cardapio jsonb
);

-- Exemplo de inserção de restaurantes
insert into restaurants (titulo, destacado, tipo, avaliacao, descricao, capa, foto, infos, cardapio) values
('Pizza da Vila', true, 'Italiana', 4.8, 'A melhor pizza artesanal da cidade.', 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c', 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c', ARRAY['Destaque do dia', 'Italiana'], '[{"id":1,"nome":"Pizza Margherita","descricao":"Molho de tomate, mussarela, manjericão","preco":49.9,"porcao":"8 fatias","foto":"https://images.unsplash.com/photo-1519864600265-abb23847ef2c"}]'),
('Sushi House', false, 'Japonesa', 4.6, 'Sushis frescos e deliciosos.', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836', ARRAY['Japonesa'], '[{"id":1,"nome":"Sushi Combo","descricao":"12 peças sortidas","preco":59.9,"porcao":"12 unidades","foto":"https://images.unsplash.com/photo-1504674900247-0877df9cc836"}]');

-- Permissão de leitura pública
alter table restaurants enable row level security;
create policy "Public read" on restaurants for select using (true);
