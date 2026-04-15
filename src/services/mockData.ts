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
    capa: 'https://sushimania.co.uk/wp-content/uploads/2024/04/sushi-what-to-expect-1024x683.jpeg',
    foto: 'https://placehold.co/100x100/E66767/fff?text=HS',
    infos: ['Japonesa', 'Destaque'],
    cardapio: [
      {
        id: 1,
        nome: 'Sushi Especial',
        descricao: 'Combinado de sushi com 10 peças selecionadas pelo chef.',
        preco: 59.9,
        porcao: '10 peças',
        foto: 'https://offloadmedia.feverup.com/portosecreto.co/wp-content/uploads/2023/06/13120901/sushi-foto-1024x683.jpg'
      },
      {
        id: 2,
        nome: 'Sashimi de Salmão',
        descricao: 'Fatias frescas de salmão servidas com molho especial.',
        preco: 45.0,
        porcao: '8 fatias',
        foto: 'https://www.manusmenu.com/wp-content/uploads/2016/06/salmon-sashimi-served-with-ponzu-and-wasabi.webp'
      },
      {
        id: 3,
        nome: 'Temaki de Atum',
        descricao: 'Temaki crocante recheado com atum fresco e cream cheese.',
        preco: 32.0,
        porcao: '1 unidade',
        foto: 'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/75FBD9DE-88CD-4463-BFD9-D05B5B37003D/Derivates/AE33DABD-BB00-4B63-8AE8-08D08A23FD1E.jpg'
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
    capa: 'https://s3.ppllstatics.com/diariovasco/www/multimedia/201908/20/media/cortadas/comida-gastronomia-platos-italia-kUrE-RXT3H6k8R30qeWZiL4ovvCM-1248x770@Diario%20Vasco.jpg',
    foto: 'https://placehold.co/100x100/E66767/fff?text=LDV',
    infos: ['Italiana'],
    cardapio: [
      {
        id: 4,
        nome: 'Pizza Margherita',
        descricao: 'Pizza clássica com molho de tomate, mussarela e manjericão fresco.',
        preco: 49.9,
        porcao: '1 pizza grande',
        foto: 'https://cdn.casaeculinaria.com/wp-content/uploads/2023/11/21140713/Pizza-marguerita-600x400.webp'
      },
      {
        id: 5,
        nome: 'Lasanha Bolonhesa',
        descricao: 'Camadas de massa fresca com molho bolonhesa e bechamel.',
        preco: 39.9,
        porcao: '1 porção',
        foto: 'https://guiadacozinha.com.br/wp-content/uploads/2014/01/lasanha-bolonhesa-na-pressao.jpg'
      },
      {
        id: 6,
        nome: 'Fettuccine Alfredo',
        descricao: 'Fettuccine ao molho cremoso com parmesão.             ',
        preco: 42.0,
        porcao: '1 porção',
        foto: 'https://www.foodandwine.com/thmb/2Ag8ydBo-tywQO8h8DUQB4LGAnY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/virginia-fettuccine-alfredo-FT-RECIPE0425-b5f151f29f7d43f9b8630411792cbe8a.jpeg'
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
    capa: 'https://resize.casapino.com.br//?u=https://cms-bomgourmet.s3.amazonaws.com/bomgourmet/2025/02/17170936/hub-1.jpg&w=480',
    foto: 'https://scontent.fopo3-2.fna.fbcdn.net/v/t1.6435-9/98000807_100102968385218_2801706277846122496_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=2a1932&_nc_ohc=yrDoliaC2T8Q7kNvwEdgqGs&_nc_oc=AdpudDrP9VDa3Bpc-GClj930cpgr2TKeeAR92_vHznjT1zUsJLtJz-0JsaBvKsxBt14&_nc_zt=23&_nc_ht=scontent.fopo3-2.fna&_nc_gid=YI1nGvPZYnpIcs9avoDVmA&_nc_ss=7a389&oh=00_Af2UuXAab20zbXqUmqo7ui2qP0G54YjW9HOQbprsGkTXAg&oe=6A04BEBE',
    infos: ['Americana', 'Destaque'],
    cardapio: [
      {
        id: 7,
        nome: 'Classic Burger',
        descricao: 'Hambúrguer clássico com queijo cheddar, alface, tomate e molho especial.',
        preco: 35.9,
        porcao: '1 unidade',
        foto: 'https://mccormick.widen.net/content/4fpitkofwn/jpeg/Mission_BBQ_Licensing_KC_Classic_BBQ_Sauce_burger_2026_1620x1020.jpg?crop=true&anchor=0,0&q=80&color=ffffffff&u=xveud9&w=1620&h=1020'
      },
      {
        id: 8,
        nome: 'BBQ Bacon Burger',
        descricao: 'Hambúrguer com bacon crocante, cebola caramelizada e molho BBQ.',
        preco: 42.9,
        porcao: '1 unidade',
        foto: 'https://scontent.fopo3-2.fna.fbcdn.net/v/t1.6435-9/98000807_100102968385218_2801706277846122496_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=2a1932&_nc_ohc=yrDoliaC2T8Q7kNvwEdgqGs&_nc_oc=AdpudDrP9VDa3Bpc-GClj930cpgr2TKeeAR92_vHznjT1zUsJLtJz-0JsaBvKsxBt14&_nc_zt=23&_nc_ht=scontent.fopo3-2.fna&_nc_gid=YI1nGvPZYnpIcs9avoDVmA&_nc_ss=7a389&oh=00_Af2UuXAab20zbXqUmqo7ui2qP0G54YjW9HOQbprsGkTXAg&oe=6A04BEBE'
      },
      {
        id: 9,
        nome: 'Smash Burger Duplo',
        descricao: 'Dois smash patties com queijo, picles e mostarda.',
        preco: 38.0,
        porcao: '1 unidade',
        foto: 'https://www.giallozafferano.com/images/346-34665/smash-burger_1200x800.jpg'
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
    capa: 'https://lirp.cdn-website.com/33406c6e/dms3rep/multi/opt/cozinha-regional-brasileira-6016550f-1920w.jpg',
    foto: 'https://placehold.co/100x100/E66767/fff?text=SB',
    infos: ['Brasileira'],
    cardapio: [
      {
        id: 10,
        nome: 'Feijoada Completa',
        descricao: 'Feijoada tradicional com arroz, farofa, couve e laranja.',
        preco: 45.0,
        porcao: '1 porção',
        foto: 'https://lirp.cdn-website.com/33406c6e/dms3rep/multi/opt/feijoada-1920w.jpg'
      },
      {
        id: 11,
        nome: 'Picanha na Chapa',
        descricao: 'Picanha grelhada servida com arroz, feijão e vinagrete.',
        preco: 55.0,
        porcao: '300g',
        foto: 'https://feed.continente.pt/media/pluolqua/picanha.png?anchor=center&mode=crop&width=826&height=620&rnd=134169462330030000&format=webp'
      },
      {
        id: 12,
        nome: 'Moqueca de Peixe',
        descricao: 'Moqueca baiana com peixe fresco, leite de coco e dendê.',
        preco: 52.0,
        porcao: '1 porção',
        foto: 'https://www.mariareceita.com.br/wp-content/uploads/2026/01/Moqueca-de-Peixe-Facil.jpg'
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
    capa: 'https://feed.continente.pt/media/indhnbgn/receita-tacos.jpg?anchor=center&mode=crop&width=826&height=620&rnd=133052031240700000&format=webp',
    foto: 'https://placehold.co/100x100/E66767/fff?text=TL',
    infos: ['Mexicana'],
    cardapio: [
      {
        id: 13,
        nome: 'Tacos al Pastor',
        descricao: 'Tacos com carne de porco marinada, abacaxi e coentro.',
        preco: 28.0,
        porcao: '3 unidades',
        foto: 'https://receitas.wap.ind.br/wp-content/uploads/2025/06/tacos-1080x640.jpg'
      },
      {
        id: 14,
        nome: 'Burrito Supreme',
        descricao: 'Burrito recheado com carne, arroz, feijão, guacamole e sour cream.',
        preco: 36.0,
        porcao: '1 unidade',
        foto: 'https://www.mccormick.com/cdn/shop/articles/chili_garlic_recipe_mix_lifestyle_tip_recipe_chili_garlic_steak_burritos_0175_1376x774_6b9d390b-9fa4-4f57-be40-826501258db4.jpg?v=1764948551&width=900'
      },
      {
        id: 15,
        nome: 'Nachos com Queijo',
        descricao: 'Nachos crocantes cobertos com queijo cheddar derretido e jalapeños.',
        preco: 25.0,
        porcao: '1 porção',
        foto: 'https://brandsitesplatform-res.cloudinary.com/image/fetch/w_800,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_1.0,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Foldelpaso%2Foldelpaso-us%2Frecipes%2Fgosa9gpqd0a6exkliimkqw_gmi_hi_res_jpeg.jpeg%3F'
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
    capa: 'https://vocegastro.com.br/app/uploads/2021/06/receita-de-yakissoba-de-carne.jpg',
    foto: 'https://placehold.co/100x100/E66767/fff?text=WE',
    infos: ['Chinesa'],
    cardapio: [
      {
        id: 16,
        nome: 'Yakisoba Tradicional',
        descricao: 'Macarrão oriental com legumes, frango e molho shoyu.',
        preco: 32.0,
        porcao: '1 porção',
        foto: 'https://vocegastro.com.br/app/uploads/2021/06/receita-de-yakissoba-de-carne.jpg'
      },
      {
        id: 17,
        nome: 'Frango Xadrez',
        descricao: 'Frango em cubos com amendoim, pimentão e molho agridoce.',
        preco: 38.0,
        porcao: '1 porção',
        foto: 'https://vitat.com.br/receitas/images/recipeshandler.jpg?id=509&tipo=r&default=s&ims=fit-in/414x275/filters:quality(60)'
      },
      {
        id: 18,
        nome: 'Chop Suey',
        descricao: 'Massa oriental com legumes variados e molho especial.',
        preco: 29.0,
        porcao: '1 porção',
        foto: 'https://emmikochteinfach.de/wp-content/uploads/2025/09/Chop-Suey-Rezept-5.webp'
      }
    ]
  }
]
