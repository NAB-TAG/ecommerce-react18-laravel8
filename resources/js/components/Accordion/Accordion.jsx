
import './Accordion.css'

const Accordion = ({ title, items, name }) => {

    // Funcion para activar la clase en el checkbox (Ln:20)
    const handleClick = (id) => {
        id = document.getElementById(`checkbox-${name}-${id}`);
        id.classList.toggle('active')
    }
    return(
        <div className="accordion">
            <div className="accordion__header">
                <h5>{ title }</h5>
            </div>
            <div className="accordion__content">
                { items.map((item, index) => {
                    return (
                        <div className="accordion__content--checkbox" key={ index }>
                            <input type="checkbox" name={ name } value={item.id} id={ 'checkbox-'+item.id } className='d-none'/>
                            <label htmlFor={ 'checkbox-'+item.id } onClick={() => handleClick(item.id)} className='d-flex align-items-center'>
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
