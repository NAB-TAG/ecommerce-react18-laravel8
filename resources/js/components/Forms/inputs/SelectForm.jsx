import { Field } from "formik";


const SelectForm = ({ icon, col, options, label, name, checked }) => {
    return(
        <div className={ col }>
            <label htmlFor="">{ label }</label>
            <div className="input-group mb-3">
				<span className="input-group-text" id="basic-addon1"><i className={ icon }></i></span>
                <Field as="select" name={ name } className="form-select">


					{ options.map(( option, index ) => (
                        ( option.id == checked ) ?
                            <option value={ option.id } key={ index } selected >{ option.name }</option>
                         :
                            <option value={ option.id } key={ index } >{ option.name }</option>
					)) }
				</Field>
			</div>
        </div>
    );
}

export default SelectForm
