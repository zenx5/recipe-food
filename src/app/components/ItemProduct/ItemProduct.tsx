import Link from "next/link"
import { productType } from "../../types"
import { CheckItem } from ".."
import styles from './ItemProduct.module.css'

export default function ItemProduct ({product, checkable }:{ product:productType, checkable:Boolean}) {

    return(<div className={styles.uppercontainer}>
        <Link href={`/products/${product.id}`}>
            <li className={styles.container}>
                <span>{product.name}</span>
                <span>{product.price}</span>
            </li>
        </Link>
        {checkable && <CheckItem id={product.id} defaultState={product.active} />}
    </div>
    )
}