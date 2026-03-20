export interface IFood{
    id: number,
    img: string,
    name: string,
    price: number,
    category?: string,
    description?: string, 
    nutrionalValue: string
}

export const MockFood: IFood[] = [
  {
    id: 1,
    img: "assets/urumakiSalmaoPhiladelphia.jpg",
    name: "Salmon Philadelphia Uramaki",
    price: 32.50,
    category: "Sushi",
    description: "Inside-out roll with rice, fresh salmon, cream cheese, and chives.",
    nutrionalValue: "250 kcal per portion"
  },
  {
    id: 2,
    img: "assets/salmonSashimi.jpg",
    name: "Salmon Sashimi",
    category: "Sashimi",
    description: "Fatias frescas de salmão cru, servidas puras para destacar o sabor e a textura do peixe.",
    price: 28.00,
    nutrionalValue: "200 kcal"
  },
  {
    id: 3,
    img: "assets/tunaTemaki.jpg",
    name: "Tuna Temaki",
    category: "Temaki",
    description: "Cone de alga recheado com arroz e atum fresco, finalizado com cebolinha para um toque especial.",
    price: 22.00,
    nutrionalValue: "220 kcal"
  },
  {
    id: 4,
    img: "assets/porkGuioza.png",
    name: "Pork Gyoza",
    category: "Aperitivos Quentes",
    description: "Pastéis japoneses recheados com carne suína e legumes, levemente grelhados e servidos com molho especial.",
    price: 18.00,
    nutrionalValue: "300 kcal"
  },
  {
    id: 5,
    img: "assets/hot-roll.jpg",
    name: "Hot Roll",
    category: "Sushi Especial",
    description: "Uramaki empanado e frito, recheado com salmão e cream cheese, crocante por fora e cremoso por dentro.",
    price: 30.00,
    nutrionalValue: "350 kcal"
  },
  {
  id: 6,
  img: "assets/california.jpg",
  name: "California Roll",
  price: 26.00,
  category: "Sushi",
  description: "Uramaki com kani, pepino e manga, leve e refrescante.",
  nutrionalValue: "240 kcal"
},
{
  id: 7,
  img: "assets/ebi-uramaki.jpg",
  name: "Ebi Uramaki",
  price: 34.00,
  category: "Sushi",
  description: "Uramaki recheado com camarão empanado e cream cheese.",
  nutrionalValue: "320 kcal"
},
{
  id: 8,
  img: "assets/kappa-maki.jpg",
  name: "Kappa Maki",
  price: 18.00,
  category: "Sushi",
  description: "Hossomaki de pepino, leve e tradicional.",
  nutrionalValue: "150 kcal"
},
{
  id: 9,
  img: "assets/salmon-nigiri.jpg",
  name: "Salmon Nigiri",
  price: 20.00,
  category: "Nigiri",
  description: "Bolinho de arroz coberto com fatia de salmão fresco.",
  nutrionalValue: "180 kcal"
},
{
  id: 10,
  img: "assets/tuna-nigiri.jpg",
  name: "Tuna Nigiri",
  price: 22.00,
  category: "Nigiri",
  description: "Arroz temperado coberto com atum fresco.",
  nutrionalValue: "170 kcal"
},
{
  id: 11,
  img: "assets/yakisoba.jpg",
  name: "Yakisoba",
  price: 29.00,
  category: "Pratos Quentes",
  description: "Macarrão oriental salteado com legumes e carne ao molho especial.",
  nutrionalValue: "400 kcal"
},
{
  id: 12,
  img: "assets/tempura.jpg",
  name: "Tempura",
  price: 27.00,
  category: "Aperitivos Quentes",
  description: "Legumes e camarões empanados e fritos, leves e crocantes.",
  nutrionalValue: "350 kcal"
},
{
  id: 13,
  img: "assets/misso.jpg",
  name: "Missoshiru",
  price: 12.00,
  category: "Entradas",
  description: "Sopa tradicional japonesa à base de missô, tofu e cebolinha.",
  nutrionalValue: "90 kcal"
},
{
  id: 14,
  img: "assets/sunomono.jpg",
  name: "Sunomono",
  price: 14.00,
  category: "Entradas",
  description: "Salada agridoce de pepino com gergelim.",
  nutrionalValue: "80 kcal"
},
{
  id: 15,
  img: "assets/combinado-20.jpg",
  name: "Combinado 20 peças",
  price: 59.90,
  category: "Combinados",
  description: "Seleção variada com sashimi, nigiri e uramaki.",
  nutrionalValue: "600 kcal"
},
{
  id: 16,
  img: "assets/combinado-40.jpg",
  name: "Combinado 40 peças",
  price: 99.90,
  category: "Combinados",
  description: "Mix completo ideal para compartilhar.",
  nutrionalValue: "1200 kcal"
}
];

export default MockFood;