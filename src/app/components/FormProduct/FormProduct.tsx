"use client";

import { productType } from "@/app/types";
import { useState } from "react";

import styles from './FormProduct.module.css'

export default function FormProduct ({ product }:{ product:productType }) {
    console.log(product)
    const {
        id=0,
        name:nameDefault = '',
        price:priceDefault = 0,
        active:activeDefault = false,
        quantity:quantityDefault = 0
    } = product

    const [name, setName] = useState(nameDefault)
    const [price, setPrice] = useState(priceDefault)
    const [active, setActive] = useState(activeDefault)
    const [quantity, setQuantity] = useState(quantityDefault)


    const handlerChangeName = ({ target: { value:newName } }:{ target: { value:string } } ) => {
        setName( () => newName )
    }

    const handlerChangeQuantity = ({ target: { value:newQuantity } }:{ target: { value:string } } ) => {
        setQuantity( () => newQuantity )
    }

    const handlerChangePrice = ({ target: { value:newPrice } }:{ target: { value:string } } ) => {
        setPrice( () => parseFloat(newPrice) )
    }

    const handlerSubmit = async (eventSubmit:any) => {
        eventSubmit.preventDefault()
        const response = await fetch('/api/products', {
            method:'post',
            body: JSON.stringify({
                name,
                price,
                active,
                quantity
            })
        })
        console.log( response )
    }

    return <form className={styles.form} onSubmit={handlerSubmit}>
        <div className={styles.row}>
            <input
                className={styles.input}
                type='text'
                placeholder='name'
                value={name}
                onChange={handlerChangeName} />
            <input
                className={styles.input}
                type='number'
                placeholder='price'
                value={price}
                onChange={handlerChangePrice} />
        </div>
        <div className={styles.row}>
            <input
                className={styles.input}
                type='text'
                placeholder='quantity'
                value={quantity}
                onChange={handlerChangeQuantity} />
            <label className={styles.checkbox}>
                <div className={active ? styles.active : styles.deactive}>
                    <input type='checkbox' onClick={()=>setActive(!active)}/>
                </div>
                {active ? 'Active' : 'Deactive'}
            </label>
        </div>
        <div className={styles.row}>
            <button className="button">Save</button>
        </div>
    </form>
}