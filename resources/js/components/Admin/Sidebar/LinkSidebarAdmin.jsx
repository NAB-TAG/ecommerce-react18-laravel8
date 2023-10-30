const LinkSidebarAdmin = ({ href, value, icon }) => {
    return(
        <div className="sidebar-admin__content--link">
            <a href={ href }>
                <i className={ icon }></i>
                <p className="m-0">{ value }</p>
            </a>
        </div>
    );
}

export default LinkSidebarAdmin;
