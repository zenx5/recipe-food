import Link from "next/link";
import { MarkdownTable } from "../components";
import { generateShoppingList, generateMenu } from "./actions";

export default async function CalculatePage () {

    // Recipes
    const responseRecipes = await fetch(`${process.env.HOST}/api/recipes`)
    const recipes = await responseRecipes.json()

    // Products
    const responseProducts = await fetch(`${process.env.HOST}/api/products`)
    const products = await responseProducts.json()

    const [prompt1, list] = await generateShoppingList(products, recipes)
    const [prompt2, menu] = await generateMenu(list, recipes);


    return <div>
        <p>{prompt1}</p>
        <p>{list}</p>
        <div style={{ marginTop:15, marginBottom:15 }}>
            <MarkdownTable content={list} />
        </div>
        <p>{prompt2}</p>
        <p>{menu}</p>
        <div style={{ marginTop:15 }}>
            <MarkdownTable content={menu} />
        </div>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', marginTop:'50px' }}>
            <Link href='/products' className='button'>Volver</Link>
        </div>
    </div>
}