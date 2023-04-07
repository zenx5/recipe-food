"use client";
import { useState } from "react";
import styles from './CheckItem.module.css'

export default function CheckItem ({ id, defaultState }:{ id:number, defaultState:Boolean }) {
    const [active, setActive] = useState( defaultState )

    const handlerToggleActive = async () => {
        const response = await fetch(`${process.env.HOST}/api/products/${id}`, {
            method:'put',
            body: JSON.stringify({
                active: !active
             })
        })
        const product = await response.json()
        setActive( prev => product.active )
    }

    return <button
        className={ active ? styles.active : styles.deactive }
        onClick={ handlerToggleActive }
    />
}