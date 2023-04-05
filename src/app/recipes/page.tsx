import Link from "next/link";
import ListParent from "../components/ListParent";

export default function RecipeListPage () {

    return(
        <ListParent>
            <li><Link href={`/recipes/1`}>Receta 1</Link></li>
            <li><Link href={`/recipes/2`}>Receta 2</Link></li>
            <li><Link href={`/recipes/3`}>Receta 3</Link></li>
            <li><Link href={`/recipes/4`}>Receta 4</Link></li>
        </ListParent>
    )
}