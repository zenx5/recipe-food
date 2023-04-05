import Link from "next/link"
interface Params {
    id: number
}

export default async function ProductPage ({ params }:{params:Params}) {
    const { id } = params
    const response = await fetch(`http://localhost:3000/api/products/${id}`)
    const product = await response.json()

    return <div>
        <p>Name: { product.name }</p>
        <p>Price: { product.price }</p>
        <Link href='/products'>Volver a Productos</Link>
    </div>

}