import ShoppingCart from "../shopping-cart/ShoppingCart";

function Search({ className, cart }){
    return(
            <div className={`col-md-12 ${ className } `}>
                <input type="text" className="w-100" placeholder="Funda para Samsung"/>
                <button>
                    <i className="fas fa-search"></i>
                </button>
                {
                    (cart)? <ShoppingCart className=""/> : <></>
                }

            </div>
    );
}

export default Search;
