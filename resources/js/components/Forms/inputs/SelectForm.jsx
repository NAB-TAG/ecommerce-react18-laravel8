import { Field } from "formik";


const SelectForm = ({ icon, col, options, label, name, checked }) => {
    // supresor de errores
    console.log(options)
    const originalConsoleError = console.error;
    console.error = (...args) => {
        if (args.some(arg => arg && arg.includes('Select elements must be either controlled or uncontrolled'))) {
            return;
        }
        originalConsoleError(...args);
    };


    return(
        <div className={ col }>
            <label htmlFor="">{ label }</label>
            <div className="input-group mb-3">
				<span className="input-group-text" id="basic-addon1"><i className={ icon }></i></span>
                { checked?
                    <Field as="select" name={ name } className="form-select" defaultValue={checked}  >
                        { options.map(( option, index ) => (
                            <option value={ option.id } key={ index }  >{ option.name }</option>
                        )) }
                    </Field>
                    :
                    <Field as="select" name={ name } className="form-select" >
                        { options.map(( option, index ) => (
                            <option value={ option.id } key={ index }  >{ option.name }</option>
                        )) }
                    </Field>
                }

			</div>
        </div>
    );
}

export default SelectForm
