'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

import styles from './DeleteAction.module.css'

export default function DeleteAction ({ id }:{ id:number }) {

    const handlerDelete = async () => {
        try {
            await fetch(`/api/products/${id}`, {
                method:'delete'
            })
            document.location.reload()
        } catch (error) {
            console.log( error )
        }

    }

    return <FontAwesomeIcon icon={faTrash} className={styles.icon} onClick={handlerDelete}/>
}