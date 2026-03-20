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
  }
];

export default MockFood;