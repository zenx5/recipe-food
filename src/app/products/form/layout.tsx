import { FormProduct } from "@/app/components";
import { productType } from "@/app/types";

export default function ProductFormLayout ({ children }:{children:any}) {

    const product:productType = {
        id: 0,
        name: '',
        price: 0,
        active: false,
        quantity: 0
    };

    return <div>
        { children ? <FormProduct product={product}/> : children }
    </div>

}