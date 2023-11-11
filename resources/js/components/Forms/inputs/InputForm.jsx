import { Field } from "formik";
import { useState } from "react";

const InputForm = ({ icon, type, placeholder, col, name, value , label }) => {
    const [ valueInput, setValueInput ] = useState();
    () => {
        setValueInput(value)
    }
    return(
        <div className={ col } >
			<label htmlFor="">{ label }</label>
			<div className="input-group mb-3">
                <Field type={ type } className="form-control d-flex" placeholder={ placeholder } aria-label={ placeholder } name={ name } defaultValue={ valueInput } id={`${type}-${name}`}/>
			</div>
		</div>
    );
}

export default InputForm
