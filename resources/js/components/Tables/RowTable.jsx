import { Link } from "react-router-dom";

const RowTable = ( props ) => {

    const columns = [];

    for (const prop in props) {
        if (prop.startsWith('col_')) {
            columns.push(props[prop]);
        }
    }

    return(
        <tr id={`row-table-product-admin-${props.id}`}>
            { columns.map((col, index) => {
                return (
                    <th key={index}>
                        {col}
                    </th>
                );
            })}

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
