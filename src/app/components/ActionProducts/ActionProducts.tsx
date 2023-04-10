import Link from "next/link";
import styles from "./ActionProducts.module.css"

export default function ActionProducts () {

    return <div className={styles.container}>
        <Link href='/' className='button'>Volver</Link>
        <Link href='/products/form' className='button'>Nuevo Producto</Link>
        <Link href='/calculate' className='button'>Calcular</Link>
    </div>
}