import Link from "next/link";
import { productType } from "../types";

export default async function ProductListPage () {
    const response = await fetch('http://localhost:3000/api/products')
    const products = await response.json()

    return(<div>
        <ul>
            { products.map( (product:productType) => (<li key={product.id}><Link href={`/products/${product.id}`}>{product.name}</Link></li>) )}
        </ul>
    </div>
    )
}