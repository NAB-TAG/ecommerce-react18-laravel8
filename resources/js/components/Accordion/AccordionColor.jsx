import { Field } from "formik";
import { useRef } from "react";
import { PRODUCT_COLORS } from "../../pages/admin/products/Product.data";


const AccordionColor = ({ col, label,value = "[]"}) => {
    const colorsRef = useRef({});
    const colorsSelected = JSON.parse(value);
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
            <h5>{ label }</h5>

            <div className="colors-product-admin row justify-content-center">

            { PRODUCT_COLORS.map(( color )=> {

                return (
                    <div className="input-group mb-2 mx-2 mt-1" id={`color-product-admin-${ color.id }`} key={ color.id }>
                    { colorsSelected.includes(color.rgba) ?
                        <>
                            <Field type="checkbox" name="colors" id={`color-id-admin_${ color.id }`} value={ color.rgba }  />

                            <label
                                htmlFor={`color-id-admin_${ color.id }`}
                                onClick={ () => handleClick(color.id, color.rgba) }
                                ref={(ref) => (colorsRef.current[color.id] = ref)}
                                className="active"
                                style={{"border": `3px solid ${color.rgba}`,"backgroundColor": color.rgba }}>
                            </label>
                        </>

                    :
                        <>
                            <Field type="checkbox" name="colors" id={`color-id-admin_${ color.id }`} value={ color.rgba } />
                            <label
                                htmlFor={`color-id-admin_${ color.id }`}
                                style={ {backgroundColor: color.rgba} }
                                onClick={ () => handleClick(color.id, color.rgba) }
                                ref={(ref) => (colorsRef.current[color.id] = ref)}>
                            </label>
                        </>
                    }
                    </div>
                );

            }) }
            </div>
        </div>
    );
}

export default AccordionColor;
