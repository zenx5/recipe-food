import Link from "next/link"
interface Params {
    id: number
}

export default function RecipePage ({ params }:{params:Params}) {
    const { id } = params

    return <div>
        <p>Receta con ID: {id}</p>
        <Link href='/products'>Volver a Recetas</Link>
    </div>

}