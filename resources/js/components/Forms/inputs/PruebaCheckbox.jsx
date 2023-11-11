import { Field } from "formik";

const PruebaCheckbox = () => {
    return(
        <>
        <Field type="checkbox" name="colors" value="rojo"/>
        <Field type="checkbox" name="colors" value="azul"/>
        <Field type="checkbox" name="colors" value="verde"/>

        </>
    );
}

export default PruebaCheckbox;
