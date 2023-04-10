import { FormProduct } from "@/app/components";

export default function ProductFormPage () {
    return <FormProduct product={{
        id: 0,
        name: '',
        price: 0,
        active: false,
        quantity: ''
    }}/>
}