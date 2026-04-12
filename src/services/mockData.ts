import { SupabaseRestaurant } from './supabaseData'

export const mockRestaurants: SupabaseRestaurant[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    destacado: true,
    tipo: 'Japonesa',
    avaliacao: 4.9,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, qualidade garantida. Experimente notes combos especiais!',
    capa: 'https://placehold.co/472x217/E66767/fff?text=Hioki+Sushi',
    foto: 'https://placehold.co/100x100/E66767/fff?text=HS',
    infos: ['Japonesa', 'Destaque'],
    cardapio: [
      {
        id: 1,
        nome: 'Sushi Especial',
        descricao: 'Combinado de sushi com 10 peças selecionadas pelo chef.',
        preco: 59.9,
        porcao: '10 peças',
        foto: 'https://placehold.co/300x200/E66767/fff?text=Sushi+Especial'
      },
      {
        id: 2,
        nome: 'Sashimi de Salmão',
        descricao: 'Fatias frescas de salmão servidas com molho especial.',
        preco: 45.0,
        porcao: '8 fatias',
        foto: 'https://placehold.co/300x200/E66767/fff?text=Sashimi'
      },
      {
        id: 3,
        nome: 'Temaki de Atum',
        descricao: 'Temaki crocante recheado com atum fresco e cream cheese.',
        preco: 32.0,
        porcao: '1 unidade',
        foto: 'https://placehold.co/300x200/E66767/fff?text=Temaki'
      }
    ]
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    destacado: false,
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica culinária italiana até você! Nossos pratos são preparados com ingredientes frescos e receitas tradicionais. Desfrute de massas caseiras, pizzas artesanais e sobremesas irresistíveis.',
    capa: 'https://placehold.co/472x217/E66767/fff?text=La+Dolce+Vita',
    foto: 'https://placehold.co/100x100/E66767/fff?text=LDV',
    infos: ['Italiana'],
    cardapio: [
      {
        id: 4,
        nome: 'Pizza Margherita',
        descricao: 'Pizza clássica com molho de tomate, mussarela e manjericão fresco.',
        preco: 49.9,
        porcao: '1 pizza grande',
        foto: 'https://placehold.co/300x200/E66767/fff?text=Margherita'
      },
      {
        id: 5,
        nome: 'Lasanha Bolonhesa',
        descricao: 'Camadas de massa fresca com molho bolonhesa e bechamel.',
        preco: 39.9,
        porcao: '1 porção',
        foto: 'https://placehold.co/300x200/E66767/fff?text=Lasanha'
      },
      {
        id: 6,
        nome: 'Fettuccine Alfredo',
        descricao: 'Fettuccine ao molho cremoso com parmesão.',
        preco: 42.0,
        porcao: '1 porção',
        foto: 'https://placehold.co/300x200/E66767/fff?text=Fettuccine'
      }
    ]
  },
  {
    id: 3,
    titulo: 'Burger Grill House',
    destacado: true,
    tipo: 'Americana',
    avaliacao: 4.7,
    descricao:
      'Hambúrgueres artesanais feitos com carne premium, pão brioche e ingredientes selecionados. Acompanhamentos incríveis e milkshakes cremosos para completar sua refeição.',
    capa: 'https://placehold.co/472x217/E66767/fff?text=Burger+Grill',
    foto: 'https://placehold.co/100x100/E66767/fff?text=BG',
    infos: ['Americana', 'Destaque'],
    cardapio: [
      {
        id: 7,
        nome: 'Classic Burger',
        descricao: 'Hambúrguer clássico com queijo cheddar, alface, tomate e molho especial.',
        preco: 35.9,
        porcao: '1 unidade',
        foto: 'https://placehold.co/300x200/E66767/fff?text=Classic+Burger'
      },
      {
        id: 8,
        nome: 'BBQ Bacon Burger',
        descricao: 'Hambúrguer com bacon crocante, cebola caramelizada e molho BBQ.',
        preco: 42.9,
        porcao: '1 unidade',
        foto: 'https://placehold.co/300x200/E66767/fff?text=BBQ+Bacon'
      },
      {
        id: 9,
        nome: 'Smash Burger Duplo',
        descricao: 'Dois smash patties com queijo, picles e mostarda.',
        preco: 38.0,
        porcao: '1 unidade',
        foto: 'https://placehold.co/300x200/E66767/fff?text=Smash+Burger'
      }
    ]
  },
  {
    id: 4,
    titulo: 'Sabor do Brasil',
    destacado: false,
    tipo: 'Brasileira',
    avaliacao: 4.5,
    descricao:
      'Comida brasileira de verdade! Feijão, arroz, farofa e carnes selecionadas. Experimente nossos pratos tradicionais feitos com muito carinho e tempero caseiro.',
    capa: 'https://placehold.co/472x217/E66767/fff?text=Sabor+do+Brasil',
    foto: 'https://placehold.co/100x100/E66767/fff?text=SB',
    infos: ['Brasileira'],
    cardapio: [
      {
        id: 10,
        nome: 'Feijoada Completa',
        descricao: 'Feijoada tradicional com arroz, farofa, couve e laranja.',
        preco: 45.0,
        porcao: '1 porção',
        foto: 'https://placehold.co/300x200/E66767/fff?text=Feijoada'
      },
      {
        id: 11,
        nome: 'Picanha na Chapa',
        descricao: 'Picanha grelhada servida com arroz, feijão e vinagrete.',
        preco: 55.0,
        porcao: '300g',
        foto: 'https://placehold.co/300x200/E66767/fff?text=Picanha'
      },
      {
        id: 12,
        nome: 'Moqueca de Peixe',
        descricao: 'Moqueca baiana com peixe fresco, leite de coco e dendê.',
        preco: 52.0,
        porcao: '1 porção',
        foto: 'https://placehold.co/300x200/E66767/fff?text=Moqueca'
      }
    ]
  },
  {
    id: 5,
    titulo: 'Taco Loco',
    destacado: false,
    tipo: 'Mexicana',
    avaliacao: 4.3,
    descricao:
      'Autêntica comida mexicana com temperos tradicionais. Tacos, burritos, nachos e muito mais para você saborear em casa.',
    capa: 'https://placehold.co/472x217/E66767/fff?text=Taco+Loco',
    foto: 'https://placehold.co/100x100/E66767/fff?text=TL',
    infos: ['Mexicana'],
    cardapio: [
      {
        id: 13,
        nome: 'Tacos al Pastor',
        descricao: 'Tacos com carne de porco marinada, abacaxi e coentro.',
        preco: 28.0,
        porcao: '3 unidades',
        foto: 'https://placehold.co/300x200/E66767/fff?text=Tacos'
      },
      {
        id: 14,
        nome: 'Burrito Supreme',
        descricao: 'Burrito recheado com carne, arroz, feijão, guacamole e sour cream.',
        preco: 36.0,
        porcao: '1 unidade',
        foto: 'https://placehold.co/300x200/E66767/fff?text=Burrito'
      },
      {
        id: 15,
        nome: 'Nachos com Queijo',
        descricao: 'Nachos crocantes cobertos com queijo cheddar derretido e jalapeños.',
        preco: 25.0,
        porcao: '1 porção',
        foto: 'https://placehold.co/300x200/E66767/fff?text=Nachos'
      }
    ]
  },
  {
    id: 6,
    titulo: 'Wok Express',
    destacado: false,
    tipo: 'Chinesa',
    avaliacao: 4.4,
    descricao:
      'Sabores orientais preparados na hora com ingredientes frescos. Pratos no wok, yakisoba, frango xadrez e muito mais para você.',
    capa: 'https://placehold.co/472x217/E66767/fff?text=Wok+Express',
    foto: 'https://placehold.co/100x100/E66767/fff?text=WE',
    infos: ['Chinesa'],
    cardapio: [
      {
        id: 16,
        nome: 'Yakisoba Tradicional',
        descricao: 'Macarrão oriental com legumes, frango e molho shoyu.',
        preco: 32.0,
        porcao: '1 porção',
        foto: 'https://placehold.co/300x200/E66767/fff?text=Yakisoba'
      },
      {
        id: 17,
        nome: 'Frango Xadrez',
        descricao: 'Frango em cubos com amendoim, pimentão e molho agridoce.',
        preco: 38.0,
        porcao: '1 porção',
        foto: 'https://placehold.co/300x200/E66767/fff?text=Frango+Xadrez'
      },
      {
        id: 18,
        nome: 'Arroz Chop Suey',
        descricao: 'Arroz frito com legumes variados e molho especial.',
        preco: 29.0,
        porcao: '1 porção',
        foto: 'https://placehold.co/300x200/E66767/fff?text=Chop+Suey'
      }
    ]
  }
]
