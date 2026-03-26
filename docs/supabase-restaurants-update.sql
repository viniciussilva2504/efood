
-- ***Atualização dos restaurantes de exemplo para Supabase
-- Corrija o nome do restaurante, adicione mais exemplos e use imagens reais do Unsplash

-- Atualizar nome do restaurante Sushi House para Steak House
update restaurants set titulo = 'Steak House', tipo = 'Churrascaria', descricao = 'Carnes nobres e cortes especiais.' where titulo = 'Sushi House';

-- Corrigir imagem da Pizza da Vila (usar imagem de pizza do Unsplash)
update restaurants set capa = 'https://images.unsplash.com/photo-1548365328-8b6b7c7c7c7c', foto = 'https://images.unsplash.com/photo-1548365328-8b6b7c7c7c7c', cardapio = '[{"id":1,"nome":"Pizza Margherita","descricao":"Molho de tomate, mussarela, manjericão","preco":49.9,"porcao":"8 fatias","foto":"https://images.unsplash.com/photo-1548365328-8b6b7c7c7c7c"}]' where titulo = 'Pizza da Vila';

-- Inserir mais 4 restaurantes de exemplo
insert into restaurants (titulo, destacado, tipo, avaliacao, descricao, capa, foto, infos, cardapio) values
('Burger Place', false, 'Hamburgueria', 4.7, 'Os melhores burgers artesanais.', 'https://images.unsplash.com/photo-1550547660-d9450f859349', 'https://images.unsplash.com/photo-1550547660-d9450f859349', ARRAY['Hamburgueria'], '[{"id":1,"nome":"Burger Clássico","descricao":"Pão, carne, queijo, salada","preco":29.9,"porcao":"1 unidade","foto":"https://images.unsplash.com/photo-1550547660-d9450f859349"}]'),
('Veggie Garden', false, 'Vegetariana', 4.5, 'Comida saudável e saborosa.', 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc', 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc', ARRAY['Vegetariana'], '[{"id":1,"nome":"Salada Primavera","descricao":"Folhas, tomate, cenoura, molho especial","preco":24.9,"porcao":"1 prato","foto":"https://images.unsplash.com/photo-1502741338009-cac2772e18bc"}]'),
('Pasta Bella', false, 'Italiana', 4.4, 'Massas frescas e molhos caseiros.', 'https://images.unsplash.com/photo-1523987355523-c7b5b0723c6a', 'https://images.unsplash.com/photo-1523987355523-c7b5b0723c6a', ARRAY['Italiana'], '[{"id":1,"nome":"Spaghetti Carbonara","descricao":"Massa, bacon, parmesão, ovo","preco":39.9,"porcao":"1 prato","foto":"https://images.unsplash.com/photo-1523987355523-c7b5b0723c6a"}]'),
('Oriental Express', false, 'Chinesa', 4.3, 'Pratos orientais autênticos.', 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0', 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0', ARRAY['Chinesa'], '[{"id":1,"nome":"Yakissoba","descricao":"Macarrão, legumes, carne","preco":34.9,"porcao":"1 prato","foto":"https://images.unsplash.com/photo-1464306076886-debca5e8a6b0"}]');
