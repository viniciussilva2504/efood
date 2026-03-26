-- Remover o restaurante Pizza da Vila
delete from restaurants where titulo = 'Pizza da Vila';

-- Inserir novo restaurante Praça Veggie
insert into restaurants (titulo, destacado, tipo, avaliacao, descricao, capa, foto, infos, cardapio) values (
'Praça Veggie', false, 'Vegetariana', 4.8, 'Opções vegetarianas criativas e saborosas.',
'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
ARRAY['Vegetariana'],
'[{"id":1,"nome":"Veggie Bowl","descricao":"Mix de legumes, grãos e molho especial","preco":32.9,"porcao":"1 prato","foto":"https://images.unsplash.com/photo-1504674900247-0877df9cc836"}]'
);
