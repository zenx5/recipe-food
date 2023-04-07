import { FormProduct } from "@/app/components";

export default function ProductFormLayout ({ children }:{children:any}) {


    return <div>
        { children ? <FormProduct product={{}}/> : children }
    </div>

}