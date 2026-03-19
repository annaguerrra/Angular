export interface IFood{
    name: string,
    price: number,
    category?: string,
    description?: string, 
    nutrionalValue: string
}

export const MockFood: IFood[] = [
    {
        name: "Salmon Philadelphia Uramaki",
        price: 32.50,
        category: "Sushi",
        description: "Inside-out roll with rice, fresh salmon, cream cheese, and chives.",
        nutrionalValue: "250 kcal per portion"
    },
    {
        name: "Salmon Sashimi",
        price: 45.00,
        category: "Raw Fish",
        description: "Fresh premium salmon slices (10 pieces).",
        nutrionalValue: "180 kcal per portion"
    },
    {
        name: "Tuna Temaki",
        price: 28.90,
        category: "Hand Rolls",
        description: "Crispy seaweed cone filled with rice and fresh tuna cubes.",
        nutrionalValue: "210 kcal per unit"
    },
    {
        name: "Pork Gyoza",
        price: 22.00,
        category: "Starters",
        description: "Pan-fried Japanese dumplings stuffed with pork and vegetables.",
        nutrionalValue: "150 kcal (3 pieces)"
    },
    {
        name: "Hot Roll",
        price: 35.00,
        category: "Fried Sushi",
        description: "Deep-fried breaded sushi roll with salmon and eel sauce.",
        nutrionalValue: "420 kcal per portion"
    }
];

export default MockFood;