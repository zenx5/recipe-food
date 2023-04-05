import Link from "next/link";

type productType = {
    id: number,
    name: string,
    price: number
}

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