import Link from "next/link";
import styles from "./ActionProducts.module.css"

export default function ActionProducts () {

    return <div className={styles.container}>
        <Link href='/calculate'>Calcular</Link>
    </div>
}