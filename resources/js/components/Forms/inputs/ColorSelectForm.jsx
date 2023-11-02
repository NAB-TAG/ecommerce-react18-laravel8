import { Field } from "formik";
import { PRODUCT_COLORS } from "../../../pages/admin/products/Product.data";
import { useRef } from "react";


const ColorSelectForm = ({ col, label }) => {
    const colorsRef = useRef({});
    const handleClick = ( id, rgba ) => {
        let colorId = colorsRef.current[id];

        if (colorId.classList.contains('active')) {
            colorId.classList.remove('active');
            colorId.style.border = `0 solid ${ rgba }`;
        } else {
            colorId.classList.add('active');
            colorId.style.border = `3px solid ${ rgba }`;
        }

    }

    return(
        <div className={ col }>
            <label htmlFor="">{ label }</label>

            <div className="colors-product-admin">
            { PRODUCT_COLORS.map(( color )=> {

                return (
                    <div className="input-group mb-2 mx-2 mt-1" id={`color-product-admin-${ color.id }`} key={ color.id } >
                        <Field type="checkbox" name="colors" id={`color-id-admin_${ color.id }`} value={ color.rgba } />
                        <label htmlFor={`color-id-admin_${ color.id }`} style={ {backgroundColor: color.rgba} } onClick={ () => handleClick(color.id, color.rgba) } ref={(ref) => (colorsRef.current[color.id] = ref)}></label>
                    </div>

                );

            }) }
            </div>
        </div>
    );
}

export default ColorSelectForm;
