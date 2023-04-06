import styles from './ListParent.module.css'

export default function ListParent ({ children }:{children:any}) {


    return <ul className={styles.ul}>{ children }</ul>
}