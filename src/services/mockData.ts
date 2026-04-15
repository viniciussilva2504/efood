import { SupabaseRestaurant } from './supabaseData'

export const mockRestaurants: SupabaseRestaurant[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    destacado: true,
    tipo: 'Japanese',
    avaliacao: 4.9,
    descricao:
      'Order the best of Japanese cuisine in the comfort of your home! Fresh sushi, delicious sashimi, and irresistible hot dishes. Fast delivery, guaranteed quality. Try our special combos!',
    capa: 'https://sushimania.co.uk/wp-content/uploads/2024/04/sushi-what-to-expect-1024x683.jpeg',
    foto: 'https://placehold.co/100x100/E66767/fff?text=HS',
    infos: ['Japanese', 'Featured'],
    cardapio: [
      {
        id: 1,
        nome: 'Special Sushi',
        descricao: 'Sushi combo with 10 pieces selected by the chef.',
        preco: 59.9,
        porcao: '10 peças',
        foto: 'https://offloadmedia.feverup.com/portosecreto.co/wp-content/uploads/2023/06/13120901/sushi-foto-1024x683.jpg'
      },
      {
        id: 2,
        nome: 'Salmon Sashimi',
        descricao: 'Fresh slices of salmon served with special sauce.',
        preco: 45.0,
        porcao: '8 slices',
        foto: 'https://www.manusmenu.com/wp-content/uploads/2016/06/salmon-sashimi-served-with-ponzu-and-wasabi.webp'
      },
      {
        id: 3,
        nome: 'Tuna Temaki',
        descricao: 'Crispy temaki filled with fresh tuna and cream cheese.',
        preco: 32.0,
        porcao: '1 unit',
        foto: 'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/75FBD9DE-88CD-4463-BFD9-D05B5B37003D/Derivates/AE33DABD-BB00-4B63-8AE8-08D08A23FD1E.jpg'
      }
    ]
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    destacado: false,
    tipo: 'Italian',
    avaliacao: 4.6,
    descricao:
      'La Dolce Vita Trattoria brings authentic Italian cuisine to you! Our dishes are prepared with fresh ingredients and traditional recipes. Enjoy homemade pasta, artisanal pizzas, and irresistible desserts.',
    capa: 'https://s3.ppllstatics.com/diariovasco/www/multimedia/201908/20/media/cortadas/comida-gastronomia-platos-italia-kUrE-RXT3H6k8R30qeWZiL4ovvCM-1248x770@Diario%20Vasco.jpg',
    foto: 'https://placehold.co/100x100/E66767/fff?text=LDV',
    infos: ['Italian'],
    cardapio: [
      {
        id: 4,
        nome: 'Margherita Pizza',
        descricao: 'Classic pizza with tomato sauce, mozzarella, and fresh basil.',
        preco: 49.9,
        porcao: '1 large pizza',
        foto: 'https://cdn.casaeculinaria.com/wp-content/uploads/2023/11/21140713/Pizza-marguerita-600x400.webp'
      },
      {
        id: 5,
        nome: 'Bolognese Lasagna',
        descricao: 'Layers of fresh pasta with bolognese and béchamel sauce.',
        preco: 39.9,
        porcao: '1 serving',
        foto: 'https://guiadacozinha.com.br/wp-content/uploads/2014/01/lasanha-bolonhesa-na-pressao.jpg'
      },
      {
        id: 6,
        nome: 'Fettuccine Alfredo',
        descricao: 'Fettuccine with special creamy white sauce and parmesan.',
        preco: 42.0,
        porcao: '1 serving',
        foto: 'https://www.foodandwine.com/thmb/2Ag8ydBo-tywQO8h8DUQB4LGAnY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/virginia-fettuccine-alfredo-FT-RECIPE0425-b5f151f29f7d43f9b8630411792cbe8a.jpeg'
      }
    ]
  },
  {
    id: 3,
    titulo: 'Burger Grill House',
    destacado: true,
    tipo: 'American',
    avaliacao: 4.7,
    descricao:
      'Handcrafted burgers made with premium beef, brioche buns, and selected ingredients. Amazing sides and creamy milkshakes to complete your meal.',
    capa: 'https://resize.casapino.com.br//?u=https://cms-bomgourmet.s3.amazonaws.com/bomgourmet/2025/02/17170936/hub-1.jpg&w=480',
    foto: 'https://scontent.fopo3-2.fna.fbcdn.net/v/t1.6435-9/98000807_100102968385218_2801706277846122496_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=2a1932&_nc_ohc=yrDoliaC2T8Q7kNvwEdgqGs&_nc_oc=AdpudDrP9VDa3Bpc-GClj930cpgr2TKeeAR92_vHznjT1zUsJLtJz-0JsaBvKsxBt14&_nc_zt=23&_nc_ht=scontent.fopo3-2.fna&_nc_gid=YI1nGvPZYnpIcs9avoDVmA&_nc_ss=7a389&oh=00_Af2UuXAab20zbXqUmqo7ui2qP0G54YjW9HOQbprsGkTXAg&oe=6A04BEBE',
    infos: ['American', 'Featured'],
    cardapio: [
      {
        id: 7,
        nome: 'Classic Burger',
        descricao: 'Classic burger with cheddar cheese, lettuce, tomato, and special sauce.',
        preco: 35.9,
        porcao: '1 unit',
        foto: 'https://mccormick.widen.net/content/4fpitkofwn/jpeg/Mission_BBQ_Licensing_KC_Classic_BBQ_Sauce_burger_2026_1620x1020.jpg?crop=true&anchor=0,0&q=80&color=ffffffff&u=xveud9&w=1620&h=1020'
      },
      {
        id: 8,
        nome: 'BBQ Bacon Burger',
        descricao: 'Burger with crispy bacon, caramelized onions, and BBQ sauce.',
        preco: 42.9,
        porcao: '1 unit',
        foto: 'https://scontent.fopo3-2.fna.fbcdn.net/v/t1.6435-9/98000807_100102968385218_2801706277846122496_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=2a1932&_nc_ohc=yrDoliaC2T8Q7kNvwEdgqGs&_nc_oc=AdpudDrP9VDa3Bpc-GClj930cpgr2TKeeAR92_vHznjT1zUsJLtJz-0JsaBvKsxBt14&_nc_zt=23&_nc_ht=scontent.fopo3-2.fna&_nc_gid=YI1nGvPZYnpIcs9avoDVmA&_nc_ss=7a389&oh=00_Af2UuXAab20zbXqUmqo7ui2qP0G54YjW9HOQbprsGkTXAg&oe=6A04BEBE'
      },
      {
        id: 9,
        nome: 'Double Smash Burger',
        descricao: 'Two smash patties with cheese, pickles, and mustard.',
        preco: 38.0,
        porcao: '1 unit',
        foto: 'https://www.giallozafferano.com/images/346-34665/smash-burger_1200x800.jpg'
      }
    ]
  },
  {
    id: 4,
    titulo: 'Sabor do Brasil',
    destacado: false,
    tipo: 'Brazilian',
    avaliacao: 4.5,
    descricao:
      'Authentic Brazilian food! Beans, rice, farofa, and selected meats. Try our traditional dishes made with care and homemade seasoning.',
    capa: 'https://lirp.cdn-website.com/33406c6e/dms3rep/multi/opt/cozinha-regional-brasileira-6016550f-1920w.jpg',
    foto: 'https://placehold.co/100x100/E66767/fff?text=SB',
    infos: ['Brazilian'],
    cardapio: [
      {
        id: 10,
        nome: 'Complete Feijoada',
        descricao: 'Traditional feijoada with rice, farofa, collard greens, and orange.',
        preco: 45.0,
        porcao: '1 serving',
        foto: 'https://lirp.cdn-website.com/33406c6e/dms3rep/multi/opt/feijoada-1920w.jpg'
      },
      {
        id: 11,
        nome: 'Grilled Picanha',
        descricao: 'Grilled picanha served with rice, beans, and vinaigrette.',
        preco: 55.0,
        porcao: '300g',
        foto: 'https://feed.continente.pt/media/pluolqua/picanha.png?anchor=center&mode=crop&width=826&height=620&rnd=134169462330030000&format=webp'
      },
      {
        id: 12,
        nome: 'Fish Moqueca',
        descricao: 'Bahian moqueca with fresh fish, coconut milk, and dendê oil.',
        preco: 52.0,
        porcao: '1 serving',
        foto: 'https://www.mariareceita.com.br/wp-content/uploads/2026/01/Moqueca-de-Peixe-Facil.jpg'
      }
    ]
  },
  {
    id: 5,
    titulo: 'Taco Loco',
    destacado: false,
    tipo: 'Mexican',
    avaliacao: 4.3,
    descricao:
      'Authentic Mexican food with traditional spices. Tacos, burritos, nachos, and much more for you to enjoy at home.',
    capa: 'https://feed.continente.pt/media/indhnbgn/receita-tacos.jpg?anchor=center&mode=crop&width=826&height=620&rnd=133052031240700000&format=webp',
    foto: 'https://placehold.co/100x100/E66767/fff?text=TL',
    infos: ['Mexican'],
    cardapio: [
      {
        id: 13,
        nome: 'Tacos al Pastor',
        descricao: 'Tacos with marinated pork, pineapple, and cilantro.',
        preco: 28.0,
        porcao: '3 unidades',
        foto: 'https://receitas.wap.ind.br/wp-content/uploads/2025/06/tacos-1080x640.jpg'
      },
      {
        id: 14,
        nome: 'Burrito Supreme',
        descricao: 'Burrito filled with meat, rice, beans, guacamole, and sour cream.',
        preco: 36.0,
        porcao: '1 unit',
        foto: 'https://www.mccormick.com/cdn/shop/articles/chili_garlic_recipe_mix_lifestyle_tip_recipe_chili_garlic_steak_burritos_0175_1376x774_6b9d390b-9fa4-4f57-be40-826501258db4.jpg?v=1764948551&width=900'
      },
      {
        id: 15,
        nome: 'Nachos with Cheese',
        descricao: 'Crunchy nachos topped with melted cheddar cheese and jalapeños.',
        preco: 25.0,
        porcao: '1 serving',
        foto: 'https://brandsitesplatform-res.cloudinary.com/image/fetch/w_800,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_1.0,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Foldelpaso%2Foldelpaso-us%2Frecipes%2Fgosa9gpqd0a6exkliimkqw_gmi_hi_res_jpeg.jpeg%3F'
      }
    ]
  },
  {
    id: 6,
    titulo: 'Wok Express',
    destacado: false,
    tipo: 'Chinese',
    avaliacao: 4.4,
    descricao:
      'Oriental flavors prepared on the spot with fresh ingredients. Wok dishes, yakisoba, kung pao chicken, and much more for you.',
    capa: 'https://vocegastro.com.br/app/uploads/2021/06/receita-de-yakissoba-de-carne.jpg',
    foto: 'https://placehold.co/100x100/E66767/fff?text=WE',
    infos: ['Chinese'],
    cardapio: [
      {
        id: 16,
        nome: 'Traditional Yakisoba',
        descricao: 'Oriental noodles with vegetables, chicken, and soy sauce.',
        preco: 32.0,
        porcao: '1 serving',
        foto: 'https://vocegastro.com.br/app/uploads/2021/06/receita-de-yakissoba-de-carne.jpg'
      },
      {
        id: 17,
        nome: 'Kung Pao Chicken',
        descricao: 'Diced chicken with peanuts, bell pepper, and sweet and sour sauce.',
        preco: 38.0,
        porcao: '1 serving',
        foto: 'https://vitat.com.br/receitas/images/recipeshandler.jpg?id=509&tipo=r&default=s&ims=fit-in/414x275/filters:quality(60)'
      },
      {
        id: 18,
        nome: 'Chop Suey',
        descricao: 'Oriental noodles with assorted vegetables and special sauce.',
        preco: 29.0,
        porcao: '1 serving',
        foto: 'https://emmikochteinfach.de/wp-content/uploads/2025/09/Chop-Suey-Rezept-5.webp'
      }
    ]
  }
]
