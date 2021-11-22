export class HunitDto {
    //id: string;             // unique identifier
    type: string;           // meat, vegetable, fruit, meal, herb, beer, wine, booze
    kind: string;           // deer, beef, hog, chili, broccoli, IPA, Bordeaux, Rum
    name: string;           // filet, bolognese, steak
    quantity: number;       // 499
    unit: string;           // gramm, litre, kilogramm
    origin: string          // uk
    createdAt: Date;     // 2021-11-13
    bestBefore: Date;   // 2021-12-31
    state: string;          // raw, cooked, ingredient
    tags: string[];         // present from Santa
}
