import { Params, productType } from "@/app/types"
import { FormProduct } from "@/app/components"

export default async function ProductEditPage ({ params }:{params:Params}) {
    const { id } = params
    const response = await fetch(`${process.env.HOST}/api/products/${id}`, { cache:'no-cache' } )
    const product:productType = await response.json()
    console.log( 'product', product )

    return product.id && <FormProduct product={product} />
}