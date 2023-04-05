import { Params, productType } from "@/app/types"

export default async function ProductEditPage ({ params }:{params:Params}) {
    const { id } = params
    const response = await fetch(`http://localhost:3000/api/products/${id}`)
    const product:productType = await response.json()

    return <p>Editar producto -{product.name}- con ID: {id}</p>
}