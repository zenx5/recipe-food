interface Params {
    id: number
}

const products = [
    { id:1, name: "Arroz", price:1.99 },
    { id:2, name: "Pasta", price:2.39 },
    { id:3, name: "Harina Pan", price:0.99 },
    { id:4, name: "Harina de Trigo", price:1.99 },
    { id:5, name: "Azucar", price:1.75 },
    { id:6, name: "Cafe", price:4.99 },
    { id:7, name: "Carne Molida", price:3.99 },
    { id:8, name: "Huevos", price:2.99 },
];

export async function GET(request: Request, { params }:{params:Params}) {
    const { id } = params
    return new Response( JSON.stringify(products.find( p => p.id==id )) )
}

