import Link from "next/link"
import styles from './page.module.css'

type Params = {
    id: number
}

export default async function ProductPage ({ params }:{params:Params}) {
    const { id } = params
    const response = await fetch(`${process.env.HOST}/api/products/${id}`, { cache:'no-cache' })
    const product:any = await response.json()

    const filterNumbers = (quantity:string) => {
        const filtered = /[a-zA-Z]{1,}/g.exec(quantity)
        if( filtered ) {
            return filtered[0]
        }
        return quantity
    }

    return <div className={styles.layout}>
        <div className={styles.container}>
            <span className={styles.image}></span>
            <div className={styles.content}>
                <span className={styles.title}>{product.name}</span>
                <span className={styles.price}>$ {product.price}/{filterNumbers(product.quantity)}</span>
            </div>
        </div>
        <div style={{ display:"flex", justifyContent:"center", gap:"10px" }}>
            <Link href='/products' className='button'>Volver a Productos</Link>
            <Link href={`/products/form/${id}`} className='button'>Editar Producto</Link>
        </div>
    </div>

}