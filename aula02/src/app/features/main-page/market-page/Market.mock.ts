export interface IMarket{
    id: number,
    name: string,
    address: string
    type: string
}

export const MockMarket: IMarket[] = [
    {
        id: 1,
        name: "Sushiro Zen",
        address: "123 Sakura Ave, Tokyo",
        type: "Kaiten-zushi (Conveyor Belt)"
    },
    {
        id: 2,
        name: "Gyu-Kaku Grill",
        address: "456 Shibuya St, Tokyo",
        type: "Yakiniku (Japanese BBQ)"
    },
    {
        id: 3,
        name: "Kyoto Omakase",
        address: "789 Gion District, Kyoto",
        type: "Edomae Sushi"
    },
    {
        id: 4,
        name: "Izakaya Nomimono",
        address: "101 Shinjuku Lane, Tokyo",
        type: "Izakaya (Japanese Pub)"
    },
    {
        id: 5,
        name: "Yakiniku King",
        address: "202 Osaka Road, Osaka",
        type: "Yakiniku (All-you-can-eat)"
    }
];

