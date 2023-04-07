import { productType } from "../types"

const recipes = [
    {
        name: "Arroz con Huevo",
        ingredients: [
            '1/8Kg de Arroz',
            '1 huevo'
        ]
    },
    {
        name: "Arroz con Carne",
        ingredients: [
            '1/8Kg de Arroz',
            '200gr de carne molida'
        ]
    },
    {
        name: "Arroz con Pasta",
        ingredients: [
            '1/4Kg de Pasta',
            '200gr de carne molida'
        ]
    },
    {
        name: "Arepas con huevo",
        ingredients: [
            '1/8Kg de harina',
            '1 huevo'
        ]
    },
    {
        name: "Arepas con Cafe",
        ingredients: [
            '1/8Kg de harina',
            '50gr de cafe',
            '10gr de azucar'
        ]
    }
]

export default async function CalculatePage () {
    let recipeList = []
    let productList = []
    let prompt = `Quisiera que por favor me ayudes a optimizar mis compras para un mes entero teniendo en consideración varias cosas:
    te dare una lista de productos con sus precios y su presentacion (paquete o granel); tambien te dare mi presupuestos 
    que es de 800$. A continuación tambien te dare una lista de posibles platos que quisiera preparar a lo largo de ese mes con 
    sus respectivos ingredientes (considerar que estas son planteadas para una sola persona):`;

    // Recipes
    for( const recipe of recipes ) {
        recipeList.push(`${recipe.name}(${recipe.ingredients.join(', ')})`)
    }
    prompt += recipeList.join(', ')

    // Products
    const responseProducts = await fetch(`${process.env.HOST}/api/products`, { cache: 'no-cache' })
    const products = (await responseProducts.json()).filter( (product:productType) => product.active );

    for( const product of products ) {
        productList.push(`${product.name}(${product.price}$, ${!product.isPackaged ? 'paquete' : 'granel'})`)
    }
    prompt += 'Y a continuacion la lista de productos con su respectivos precios y presentacion'
    prompt += productList.join(', ')
    prompt += 'Por favor hazme con esta informacion mi lista de compras y me das por favor el total a gastar'

    const response = await fetch(`${process.env.HOST}/api/gpt`, {
        method:'post',
        body: JSON.stringify({
            prompt: prompt
        })
    })
    const { choices } = await response.json()
    return <div>
        <p><b>Prompt: </b> {prompt}</p>
        <p><b>Result: </b> {choices[0].message.content}</p>
    </div>
}