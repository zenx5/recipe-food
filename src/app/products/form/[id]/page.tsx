interface Params {
    id: number
}

export default function ProductEditPage ({ params }:{params:Params}) {
    const { id } = params
    return <p>Editar producto con ID: {id}</p>
}