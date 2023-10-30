const RowTable = ( props ) => {

    const columnas = [];

    for (const prop in props) {
        if (prop.startsWith('col_')) {
            columnas.push(props[prop]);
        }
    }

    return(
        <tr>
            { columnas.map((col, index) => {
                return (
                    <th key={index}>
                        {col}
                    </th>
                );
            })}

            {/* Si existe un enlance para editar, creo el boton */}
            { (props.editHref)?
                <th>
                    <a href={props.edit} className="btn btn-primary">
                        <i className="fas fa-edit"></i>
                    </a>
                </th>
            :<></> }

            { (props.deleteHref)?
                <th>
                    <form action={props.delete}>
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
