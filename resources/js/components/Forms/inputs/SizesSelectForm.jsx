import { Field } from "formik";
import { PRODUCT_SIZES } from "../../../pages/admin/products/Product.data";
import { useRef } from "react";


const SizesSelectForm = ({ col, label }) => {
    const sizesRef = useRef({});
    const handleClick = ( id ) => {
        let sizeId = sizesRef.current[id];

        if (sizeId.classList.contains('active')) {
            sizeId.classList.remove('active');
            sizeId.style.border = `0 solid black`;
        } else {
            sizeId.classList.add('active');
            sizeId.style.border = `3px solid black`;
        }

    }

    return(
        <div className={ col }>
            <label htmlFor="">{ label }</label>

            <div className="sizes-product-admin">
            { PRODUCT_SIZES.map(( size )=> {

                return (
                    <div className="input-group mb-2 mx-2 mt-1" id={`size-product-admin-${ size.id }`} key={ size.id } >
                        <Field type="checkbox" name="sizes" id={`size-id-admin_${ size.id }`} value={ size.value } />
                        <label htmlFor={`size-id-admin_${ size.id }`} onClick={ () => handleClick(size.id) } ref={(ref) => (sizesRef.current[size.id] = ref)}>
                            <span>{ size.name }</span>
                        </label>
                    </div>

                );

            }) }
            </div>
        </div>
    );
}

export default SizesSelectForm;
