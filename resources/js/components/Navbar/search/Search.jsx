function Search(){
    return(
            <div className="col-md-9 d-flex navbar__search--search ps-1">
                <input type="text" className="w-100" placeholder="Funda para Samsung"/>
                <button>
                    <i className="fas fa-search"></i>
                </button>
            </div>
    );
}

export default Search;
