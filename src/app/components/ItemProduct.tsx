import Link from "next/link"
import { productType } from "../types"
import styles from './ItemProduct.module.css'

export default function ItemProduct ({product}:{product:productType}) {

    return(
        <Link href={`/products/${product.id}`}>
            <li className={styles.container}>
                <span>{product.name}</span>
                <span>{product.price}</span>
            </li>
        </Link>
    )
}