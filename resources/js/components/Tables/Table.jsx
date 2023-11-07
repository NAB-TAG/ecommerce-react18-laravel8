const Table = ( props ) => {

    const columns = [];

    for (const prop in props) {
        if (prop.startsWith('col_')) {
            columns.push(props[prop]);
        }
    }

    return(
        <div className="products-table-admin table-responsive">
            <table className="table">
                <thead>
                    <tr>
                    { columns.map((col, index) => {
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
