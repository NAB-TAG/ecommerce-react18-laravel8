import ListCategoriesNavbar from "./ListCategoriesNavbar";

const CategoriesNavbar = () => {
    return(
        <div className="col-md-3 bg-white">
            <div className="navbar__search--header d-flex align-items-center px-4 py-2">
                <i className="fa-solid fa-bars-staggered me-2"></i>
                <p className="m-0 fw-bolder">Categorias</p>
            </div>
            <div className="navbar__search--list px-4 py-2">
                <ListCategoriesNavbar />

            </div>
        </div>
    )
}

export default CategoriesNavbar;
