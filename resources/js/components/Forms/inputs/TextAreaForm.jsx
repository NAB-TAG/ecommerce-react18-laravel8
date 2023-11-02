import { Field } from "formik";


const TextAreaForm = ({ icon, col, options, label, name, value }) => {
    return(
        <div className={ col } >
		<label htmlFor="exampleFormControlTextarea1">{ label }</label>
			<div className={ "input-group p-0 "+col }>
                {/* <div className="mb-3"> */}
                    {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                    <Field as="textarea" className="form-control" id="exampleFormControlTextarea1" rows="7" name={ name } defaultValue={ value }>

                    </Field>

                {/* </div> */}
			</div>
		</div>
    );
}

export default TextAreaForm
