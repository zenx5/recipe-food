import { MarkdownTable } from "../components";
import { productType } from "../types"

export default async function CalculatePage () {
    let recipeList = []
    let productList = []
    let prompt = `Quisiera que por favor me ayudes a optimizar mis compras para un mes entero teniendo en consideración varias cosas:
    te dare una lista de productos con sus precios; tambien te dare mi presupuestos que es de 800$. 
    A continuación tambien te dare una lista de posibles platos que quisiera preparar a lo largo de ese mes con 
    sus respectivos ingredientes (considerar que estas son planteadas para una sola persona):`;

    // Recipes
    const responseRecipes = await fetch(`${process.env.HOST}/api/recipes`, { cache: 'no-cache' })
    const recipes = await responseRecipes.json()

    for( const recipe of recipes ) {
        recipeList.push(`${recipe.name}(${recipe.ingredients.join(', ')})`)
    }
    prompt += recipeList.join(', ')

    // Products
    const responseProducts = await fetch(`${process.env.HOST}/api/products`, { cache: 'no-cache' })
    const products = await responseProducts.json()

    for( const product of products ) {
        productList.push(`${product.name}(${product.quantity} por ${product.price}$)`)
    }
    prompt += 'Y a continuacion la lista de productos con su respectivos precios'
    prompt += productList.join(', ')
    prompt += 'Por favor hazme con esta informacion mi lista de compras y me das por favor el total a gastar.'
    prompt += 'Limitate a solo presentar la lista de compras como una tabla sin ningun comentario o explicacion'

    const response = await fetch(`${process.env.HOST}/api/gpt`, {
        method:'post',
        body: JSON.stringify({
            prompt: prompt
        })
    })
    const { choices } = await response.json()



    return <div>
        <p><b>Prompt: </b> {prompt}</p>
        {/* <p><b>Result: </b> {choices[0].message.content}</p>> */}
        <div>
            <MarkdownTable content={choices[0].message.content} />
        </div>
    </div>
}