const AdminFeature = ({ name, value, icon, color }) => {
    return(
        <div className={ `col-md-3 bg-${ color } admin-feature rounded mt-2` }>
            <i className={ icon }></i>
            <div className="admin-feature__content">
                <h4>{ name }</h4>
                <h6>{ value }</h6>
            </div>
        </div>
    );
}

export default AdminFeature
