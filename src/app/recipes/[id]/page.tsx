import Link from "next/link"
import { Params } from "@/app/types"

export default function RecipePage ({ params }:{params:Params}) {
    const { id } = params

    return <div>
        <p>Receta con ID: {id}</p>
        <Link href='/products'>Volver a Recetas</Link>
    </div>

}