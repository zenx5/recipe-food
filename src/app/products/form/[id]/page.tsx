interface Params {
    id: number
}

type productType = {
    id: number,
    name: string,
    price: number
}

export default async function ProductEditPage ({ params }:{params:Params}) {
    const { id } = params
    const response = await fetch(`http://localhost:3000/api/products/${id}`)
    const product = await response.json()
    
    return <p>Editar producto "{product.name}" con ID: {id}</p>
}