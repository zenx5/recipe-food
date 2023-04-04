interface Params {
    id: number
}

export default function RecipeEditPage ({ params }:{params:Params}) {
    const { id } = params
    return <p>Editar receta con ID: {id}</p>
}