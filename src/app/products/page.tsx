import Link from "next/link";
import ItemProduct from "../components/ItemProduct";
import ListParent from "../components/ListParent";
import { productType } from "../types";

export default async function ProductListPage () {
    const response = await fetch('http://localhost:3000/api/products')
    const products = await response.json()
    // <li key={product.id}><Link href={`/products/${product.id}`}>{product.name}</Link></li>
    return(<div>
        <h3 className='title-h3'>Lista de Productos</h3>
        <ListParent>
            { products.map( (product:productType) => (<ItemProduct product={product} key={product.id} />) )}
        </ListParent>
    </div>
    )
}