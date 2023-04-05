import Link from "next/link"
import styles from './page.module.css'

type Params = {
    id: number
}

export default async function ProductPage ({ params }:{params:Params}) {
    const { id } = params
    const response = await fetch(`http://localhost:3000/api/products/${id}`)
    const product = await response.json()

    return <div className={styles.layout}>
        <div className={styles.container}>
            <span className={styles.image}></span>
            <div className={styles.content}>
                <span className={styles.title}>{product.name}</span>
                <span className={styles.price}>$ {product.price}</span>
            </div>
        </div>
        

        <Link href='/products'>Volver a Productos</Link>
    </div>

}