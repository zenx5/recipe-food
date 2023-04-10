import Link from "next/link"
import { productType } from "../../types"
import { CheckItem, DeleteAction } from ".."
import styles from './ItemProduct.module.css'

export default function ItemProduct ({product, checkable, deletable }:{ product:productType, checkable:Boolean, deletable:Boolean}) {

    return(<div className={styles.uppercontainer}>
        <Link href={`/products/${product.id}`}>
            <li className={styles.container}>
                <span>{product.name}</span>
                <span>{product.price}</span>
            </li>
        </Link>
        <span className={styles.actions}>
            {deletable && <DeleteAction id={product.id} />}
            {checkable && <CheckItem id={product.id} defaultState={product.active} />}
        </span>
    </div>
    )
}