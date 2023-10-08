import ShoppingCart from "../shopping-cart/ShoppingCart";
import { useRef } from "react";

function Search({ className, cart }){
    const search = useRef();
    const handleSearch = (e) => {
        e.preventDefault();
        // alert("d")
        console.log(search.current.value)
    }

    return(
            <div className={`col-md-12 ${ className } `}>
                <form action="" className="col-md-9" onSubmit={ handleSearch }>

                    <input type="text" className="w-100" placeholder="Funda para Samsung" ref={ search } />
                    <button type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
                {
                    (cart)? <ShoppingCart className=""/> : <></>
                }

            </div>
    );
}

export default Search;
