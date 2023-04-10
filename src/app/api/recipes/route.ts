import { NextRequest, NextResponse } from "next/server";

const recipes = [
    {
        id:1,
        name: "Arroz con Huevo",
        type:['Almuerzo'],
        ingredients: [
            '1/8Kg de Arroz',
            '1 huevo'
        ]
    },
    {
        id:2,
        name: "Arroz con Carne",
        type:['Almuerzo'],
        ingredients: [
            '1/8Kg de Arroz',
            '200gr de carne molida'
        ]
    },
    {
        id:3,
        name: "Pasta con Carne",
        type:['Almuerzo'],
        ingredients: [
            '1/4Kg de Pasta',
            '200gr de carne molida'
        ]
    },
    {
        id:4,
        name: "Arepas con huevo",
        type:['Desayuno','Cena'],
        ingredients: [
            '1/8Kg de harina',
            '1 huevo'
        ]
    },
    {
        id:5,
        name: "Arepas con Cafe",
        type:['Desayuno', 'Cena'],
        ingredients: [
            '1/8Kg de harina',
            '50gr de cafe',
            '10gr de azucar'
        ]
    }
]

export async function GET (request:Request) {
    return NextResponse.json( recipes )
}