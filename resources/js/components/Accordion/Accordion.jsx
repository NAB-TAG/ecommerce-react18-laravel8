
import { Field, FieldArray } from 'formik';
import './Accordion.css'

const Accordion = ({ title, items, name, type = false}) => {

    // Funcion para activar la clase en el checkbox (Ln:20)
    const handleClick = (id) => {

        // nameInput.click();
        id = document.getElementById(`checkbox-${name}-${id}`);

        // nameInput.checked = true;
        id.classList.toggle('active')
    }
    return(
        <div className="accordion">
            <div className="accordion__header">
                <h5>{ title }</h5>
            </div>
            <div className="accordion__content">
                {/* <Field name="sizes" type="checkbox" value="1"/> */}
                { items.map((item, index) => {
                    return (
                        <div className="accordion__content--checkbox" key={ index }>
                            { type ?
                                <Field type="checkbox" name={ name } value={ item.name } id={ `checkbox-${name}-input-${item.id}`} className='d-none'/>
                            :
                                <Field type="checkbox" name={ name } value={ JSON.stringify(item.id) } id={ `checkbox-${name}-input-${item.id}`} className='d-none'/>
                            }

                            <label htmlFor={ `checkbox-${name}-input-${item.id}` } onClick={() => handleClick(item.id)} className='d-flex align-items-center'>
                                <div id={ `checkbox-${name}-${item.id}` }>
                                    <i className="fa-solid fa-check"></i>
                                </div>
                                <p className='m-0'>{ item.name }</p>
                            </label>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Accordion;
