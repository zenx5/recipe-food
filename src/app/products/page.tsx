
import { ItemProduct, ListParent, ActionProducts } from "../components"
import { productType } from "../types";

export default async function ProductListPage () {
    const response = await fetch(`${process.env.HOST}/api/products`, { cache: 'no-cache'})
    const products = await response.json()

    return(<div>
        <h3 className='title-h3'>Lista de Productos</h3>
        <ListParent>
            { products.map( (product:any) => (<ItemProduct product={product} key={product.id} checkable />) )}
        </ListParent>
        <ActionProducts />
    </div>
    )
}