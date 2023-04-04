import Link from "next/link"
interface Params {
    id: number
}

export default function ProductPage ({ params }:{params:Params}) {
    const { id } = params

    return <div>
        <p>Producto con ID: {id}</p>
        <Link href='/products'>Volver a Productos</Link>
    </div>

}