import Link from "next/link";

export default function ProductListPage () {

    return(
        <ul>
            <li><Link href={`/products/1`}>Producto 1</Link></li>
            <li><Link href={`/products/2`}>Producto 2</Link></li>
            <li><Link href={`/products/3`}>Producto 3</Link></li>
            <li><Link href={`/products/4`}>Producto 4</Link></li>
        </ul>
    )
}