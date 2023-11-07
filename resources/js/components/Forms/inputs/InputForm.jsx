import { Field } from "formik";

const InputForm = ({ icon, type, placeholder, col, name, value, label }) => {
    return(
        <div className={ col } >
			<label htmlFor="">{ label }</label>
			<div className="input-group mb-3">
				{ (value )?
                    <input  type={ type } className="form-control d-flex" placeholder={ placeholder } aria-label={ placeholder } name={ name } defaultValue={ value } id={`${type}-${name}`}/>
                :
                    <Field type={ type } className="form-control d-flex" placeholder={ placeholder } aria-label={ placeholder } name={ name } value={ value } id={`${type}-${name}`}/>
                }

			</div>
		</div>
    );
}

export default InputForm
