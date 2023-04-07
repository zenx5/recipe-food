"use client";

import { productType } from "@/app/types";
import { useState } from "react";

export default function FormProduct ({ product }:{ product:productType }) {
    console.log(product)
    const {
        id=0,
        name:nameDefault='',
        price:priceDefault=0,
        active:activeDefault=false
    } = product

    const [name, setName] = useState(nameDefault)
    const [price, setPrice] = useState(priceDefault)
    const [active, setActive] = useState(activeDefault)


    const handlerChangeName = ({ target: { value:newName } }:{ target: { value:string } } ) => {
        setName( () => newName )
    }

    const handlerChangePrice = ({ target: { value:newPrice } }:{ target: { value:number } } ) => {
        setPrice( () => newPrice )
    }

    return <form>
        <div>
            <input type='text' placeholder="name" value={name} onChange={handlerChangeName} />
            <input type='number' placeholder="price" value={price} onChange={handlerChangePrice} />
        </div>
        <div>
            <label>
                <input type='checkbox' />
                Active
            </label>
            <button>Save</button>
        </div>
    </form>
}