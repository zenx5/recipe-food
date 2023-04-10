"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons'


export default function CheckItem ({ id, defaultState }:{ id:number, defaultState:Boolean }) {
    const [active, setActive] = useState( defaultState )
    const { host } = document?.location || ''
    const handlerToggleActive = async () => {
        const response = await fetch(`http://${host}/api/products/${id}`, {
            method:'put',
            body: JSON.stringify({
                active: !active
             })
        })
        const product = await response.json()
        setActive( prev => product.active )
    }

    return <FontAwesomeIcon icon={active ? faCheckSquare : faSquare} onClick={handlerToggleActive}/>

}