import Link from "next/link";

export default function RecipeListPage () {

    return(
        <ul>
            <li><Link href={`/recipes/1`}>Receta 1</Link></li>
            <li><Link href={`/recipes/2`}>Receta 2</Link></li>
            <li><Link href={`/recipes/3`}>Receta 3</Link></li>
            <li><Link href={`/recipes/4`}>Receta 4</Link></li>
        </ul>
    )
}