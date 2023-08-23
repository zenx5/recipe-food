"use client";

import Link from "next/link";
import { productType } from "@/app/types";
import { useEffect, useState } from "react";

import styles from './FormProduct.module.css'

export default function FormProduct ({ product }:{ product:productType }) {
    const {
        id=0,
        name:nameDefault = '',
        price:priceDefault = 0,
        active:activeDefault = false,
        quantity:quantityDefault = ''
    } = product
    //crea o dame tipo de dato para required

    const [required, setRequired] = useState<any>(null)
    const [name, setName] = useState(nameDefault)
    const [price, setPrice] = useState(priceDefault)
    const [active, setActive] = useState(activeDefault)
    const [quantity, setQuantity] = useState(quantityDefault)

    useEffect( () => {
        if ( required === null ){
            validateRequired('name',name)
            validateRequired('quantity',quantity)
        }
    }, [required])


    const validateRequired = (field:string, currentValue:string) => {
        if( currentValue!=='' ) {
            setRequired( (prev:any) => (prev || []).filter( (item:string) => item !== field ) )
        } else {
            setRequired( (prev:any) => {
                if( (prev || []).includes(field) ) return (prev || [])
                return [ field, ...(prev || []) ]
            } )
        }
    }

    const handlerChangeName = ({ target: { value:newName } }:{ target: { value:string } } ) => {
        setName( () => newName )
        validateRequired('name', newName)
    }

    const handlerChangeQuantity = ({ target: { value:newQuantity } }:{ target: { value:string } } ) => {
        setQuantity( () => newQuantity )
        validateRequired('quantity', newQuantity)
    }

    const handlerChangePrice = ({ target: { value:newPrice } }:{ target: { value:string } } ) => {
        setPrice( () => parseFloat(newPrice) )
    }

    const handlerSubmit = async (eventSubmit:any) => {
        eventSubmit.preventDefault()
        if ( required && required.length>0 ) return;
        try {
            const response = await fetch('/api/products', {
                method:'post',
                body: JSON.stringify({
                    name,
                    price,
                    active,
                    quantity
                })
            })
            window.document.location.pathname = id ? `/products/${id}` : '/products'
        } catch ( error ) {
            console.log( error )
        }
    }

    return <form className={styles.form} onSubmit={handlerSubmit}>
        <div className={styles.row}>
            <input
                className={styles.input}
                type='text'
                placeholder='name'
                value={name}
                style={ required ? (required.includes('name') ? { border:'1px solid red' } : {}) : {} }
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
                style={ required ? (required.includes('quantity') ? { border:'1px solid red' } : {}) : {} }
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
            <button className="button" disabled>Save</button>
            <Link className="button" href={ id ? `/products/${id}` : '/products' }>Back</Link>
        </div>
    </form>
}