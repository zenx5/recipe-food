import { recipeType, productType } from "../types";

export const generateShoppingList = async ( products:Array<productType>, recipes:Array<recipeType> ) => {
    let recipeList = []
    let productList = []
    let prompt = `Quisiera que por favor me ayudes a optimizar mis compras para un mes entero teniendo en consideración varias cosas:
    te dare una lista de productos con sus precios; tambien te dare mi presupuestos que es de 800$. 
    A continuación tambien te dare una lista de posibles platos que quisiera preparar a lo largo de ese mes con 
    sus respectivos ingredientes (considerar que estas son planteadas para una sola persona):`;

    for( const recipe of recipes ) {
        recipeList.push(`${recipe.name}(${recipe.ingredients.join(', ')})`)
    }
    prompt += recipeList.join(', ')

    for( const product of products ) {
        productList.push(`${product.name}(${product.quantity} por ${product.price}$)`)
    }
    prompt += 'Y a continuacion la lista de productos con su respectivos precios'
    prompt += productList.join(', ')
    prompt += 'Por favor hazme con esta informacion mi lista de compras para un mes y me das por favor el total a gastar.'
    prompt += 'Limitate a solo presentar la lista de compras como una tabla sin ningun comentario o explicacion'

    const response = await fetch(`${process.env.HOST}/api/gpt`, {
        method:'post',
        body: JSON.stringify({
            prompt: prompt
        })
    })
    const { choices } = await response.json()

    return choices[0].message.content

}

export const generateMenu = async (shoppingList:string, recipes:Array<recipeType>) => {
    let recipeList = []
    let prompt = `Define por favor que menus puedo preparar si mi lista de productos disponibles
    es la siguiente:
    ${shoppingList}`

    for( const recipe of recipes ) {
        recipeList.push(`${recipe.name}(${recipe.ingredients.join(', ')})`)
    }
    prompt += recipeList.join(', ')
    prompt += `Por favor muestrame el menu para cada día (desayuno, almuerzo y cena) y presentalo
    como una tabla. Limitate a solo presentar la lista de compras como una tabla sin ningun comentario o explicacion`

    const response = await fetch(`${process.env.HOST}/api/gpt`, {
        method:'post',
        body: JSON.stringify({
            prompt: prompt
        })
    })
    const { choices } = await response.json()

    return choices[0].message.content
}