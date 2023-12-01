import { Link } from "react-router-dom";

const RowTable = ( props ) => {

    const columns = [];

    for (const prop in props) {
        if (prop.startsWith('col_')) {
            columns.push(props[prop]);
        }
    }

    return(
        <tr id={props.classname}>
            { columns.map((col, index) => {
                return(
                    <td key={index}>
                        {col}
                    </td>
                );
            })}

            { props.icon ?
                <th>
                    <i className={ props.icon }></i>
                </th>
                :<></>
            }
            { props.image ?
                <th>
                    <img src={ props.image } className="img-fluid" style={{"max-width": "700px", 'min-width': "100%", 'height': 'auto', 'min-height': '200px'}} />
                </th>
            :<></>}
            {/* Si existe un enlance para editar, creo el boton */}
            { (props.editHref)?
                <th>
                    <Link className="btn btn-primary" to={ props.editHref } state={ props.state }><i className="fas fa-edit"></i></Link>
                </th>
            :<></> }

            { (props.deleteHref)?
                <th>
                    <form action={props.delete} onSubmit={ (e) => props.deleteSubmit(e, props.id) }>
                        <button className="btn btn-danger">
                            <i className="fas fa-trash"></i>
                        </button>
                    </form>
                </th>
            :<></> }

        </tr>
    );
}

export default RowTable;
