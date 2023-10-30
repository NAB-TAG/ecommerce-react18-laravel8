const Table = ( props ) => {

    const columnas = [];

    for (const prop in props) {
        if (prop.startsWith('col_')) {
            columnas.push(props[prop]);
        }
    }

    return(
        <div className="products-table-admin table-responsive">
            <table className="table">
                <thead>
                    <tr>
                    { columnas.map((col, index) => {
                        return (
                            <th key={index}>
                                {col}
                            </th>
                        );
                    })}

                    </tr>
                </thead>
                <tbody>
                    { props.children }
                </tbody>
            </table>
        </div>
    );
}

export default Table;
