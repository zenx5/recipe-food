import { MarkdownTable } from "../components";
import { generateShoppingList, generateMenu } from "./actions";

export default async function CalculatePage () {

    // Recipes
    const responseRecipes = await fetch(`${process.env.HOST}/api/recipes`)
    const recipes = await responseRecipes.json()

    // Products
    const responseProducts = await fetch(`${process.env.HOST}/api/products`)
    const products = await responseProducts.json()

    const list = await generateShoppingList(products, recipes)
    const menu = await generateMenu(list, recipes);


    return <div>
        <div style={{ marginTop:15, marginBottom:15 }}>
            <MarkdownTable content={list} />
        </div>
        <div style={{ marginTop:15 }}>
            <MarkdownTable content={menu} />
        </div>
    </div>
}