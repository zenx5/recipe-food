export type Params = {
    id: number
}

export type productType = {
    id: number,
    name: string,
    price: number,
    active: boolean,
    quantity: number
}

export type recipeType = {
    id: number,
    name: string,
    type: Array<string>,
    ingredients: Array<string>
}
