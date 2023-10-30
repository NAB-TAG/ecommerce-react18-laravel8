import ShoppingCart from "../shopping-cart/ShoppingCart";
import { useRef } from "react";
import '../../../../css/search/search.css'

const products = [
    { id: 1, name: 'White traditional long dress', image: '1.jpg', price: 3400 },
    { id: 2, name: 'Long sleave denins jacket', image: '2.jpg', price: 3400 },
    { id: 3, name: 'Hush Puppies', image: '3.jpg', price: 3400 },
    { id: 4, name: 'Athenis skirt', image: '4.jpg', price: 34000 },
    { id: 5, name: 'White traditional long dress', image: '5.jpg', price: 34000 },
    { id: 6, name: 'Long sleave denins jacket', image: '6.jpg', price: 34000 },
    { id: 7, name: 'Hush Puppies', image: '7.jpg', price: 3400 },
    { id: 8, name: 'Athenis skirt', image: '8.jpg', price: 34000000 },
    { id: 9, name: 'White traditional long dress', image: '9.jpg', price: 3400 },
    { id: 10, name: 'Long sleave denins jacket', image: '10.jpg', price: 34000 },
    { id: 11, name: 'Hush Puppies', image: '11.jpg', price: 34000 },
    { id: 12, name: 'Athenis skirt', image: '12.jpg', price: 34000 },

]

function Search({ className, cart }){
    const search = useRef();
    const handleSearch = (e) => {
        e.preventDefault();


    }

    return(
            <div className={`col-md-12 ${ className } `}>
                <form action="" className="col-md-9" onSubmit={ handleSearch }>

                    <input type="text" className="w-100" placeholder="Funda para Samsung" ref={ search } />
                    <button type="submit">
                        <i className="fas fa-search"></i>
                    </button>

                    <div className="search-results d-none">

                        <a href="#" className="search-results__result">
                            <div className="search-results__result--image">
                                <img src="/media/images/products/1.jpg" alt="" />
                            </div>
                            <p>Pulóver de Algodón Beige: Elegancia y Comodidad</p>
                        </a>
                        <a href="#" className="search-results__result">
                            <div className="search-results__result--image">
                                <img src="/media/images/products/2.jpg" alt="" />
                            </div>
                            <p>Elegancia y Abrazo Cálido: Pulóver de Mujer</p>
                        </a>
                        <a href="#" className="search-results__result">
                            <div className="search-results__result--image">
                                <img src="/media/images/products/3.jpg" alt="" />
                            </div>
                            <p>Zapatillas Nike de Cuero mujer: Estilo y Durabilidad</p>
                        </a>
                    </div>
                </form>
                {
                    (cart)? <ShoppingCart className=""/> : <></>
                }

            </div>
    );
}

export default Search;
