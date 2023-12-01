const OptionsTable = ({ children }) => {
    return (
        <div className="my-3 row">
            <div className="products-admin__content d-flex justify-content-sm-end ">
                { children }
            </div>
        </div>
    );
}

export default OptionsTable;
