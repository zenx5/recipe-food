import { recipeType, productType } from "../types";

export const generateShoppingList = async ( products:Array<productType>, recipes:Array<recipeType> ) => {
    let recipeList = []
    let recipeMenu = []
    let productList = []

    for( const recipe of recipes ) {
        recipeList.push(`${recipe.name}(${recipe.ingredients.join(', ')})`)
        recipeMenu.push(`${recipe.name} solo en ${recipe.type.join('y ')}`)
    }

    for( const product of products ) {
        productList.push(`${product.name}(${product.quantity} por ${product.price}$)`)
    }

    // Creacion del prompt
    let prompt = `Quisiera que por favor me ayudes a optimizar mis compras para un mes entero teniendo en consideración varias cosas:
    te dare una lista de productos con sus precios; tambien te dare mi presupuestos que es de 800$. 
    A continuación tambien te dare una lista de posibles platos que quisiera preparar a lo largo de ese mes con 
    sus respectivos ingredientes (considerar que estas son planteadas para una sola persona):
    ${recipeList.join(', ')}
    también debes respetar que hay menus que solo pueden presentar en ciertas comidas, te dejo una lista 
    para guiarte: ${recipeMenu.join(', ')}.
    Y a continuacion la lista de productos con su respectivos precios
    ${productList.join(', ')}
    Por favor hazme con esta informacion mi lista de compras para un mes y me das por favor el total a gastar.

    Limitate a solo presentar la lista de compras como una tabla sin ningun comentario o explicacion`;

    // Envio del prompt
    try{
        const response = await fetch(`${process.env.HOST}/api/gpt`, {
            method:'post',
            body: JSON.stringify({
                prompt: prompt
            })
        })
        const { choices } = await response.json()
        return [prompt, choices[0].message.content]
    } catch (error) {
        return [prompt, null]
    }
}

export const generateMenu = async (shoppingList:string, recipes:Array<recipeType>) => {
    let recipeList = []
    let recipeMenu = []

    for( const recipe of recipes ) {
        recipeList.push(`${recipe.name}(${recipe.ingredients.join(', ')})`)
        recipeMenu.push(`${recipe.name} solo en ${recipe.type.join('y ')}`)
    }

    let prompt = `Define por favor que menus puedo preparar si mi lista de productos disponibles
    es la siguiente:
    ${shoppingList}
    Por favor muestrame el menu para cada día (desayuno, almuerzo y cena) y presentalo
    como una tabla. Tomando en cuenta que las posibles recetas son estas:
    ${recipeList.join(', ')}
    toma en consideracion que hay menus que no se pueden presentar en ciertas comidas por eso fijate tambien
    de esta lista donde te presento en que comidas se presenta cada menu:
    ${recipeMenu.join(', ')}
    Limitate a solo presentar la lista de compras como una tabla sin ningun comentario o explicacion`

    const response = await fetch(`${process.env.HOST}/api/gpt`, {
        method:'post',
        body: JSON.stringify({
            prompt: prompt
        })
    })
    const { choices } = await response.json()

    return [prompt, choices[0].message.content]
}