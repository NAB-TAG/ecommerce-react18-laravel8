import ShoppingCart from "../shopping-cart/ShoppingCart";
import { useEffect, useRef, useState } from "react";
import '../../../../css/search/search.css'
import { GetFetch } from "../../../hooks/Fetch.hook";
import { Link } from "react-router-dom";

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
    const [searchTerm, setSearchTerm] = useState('');
    const [ resultSearch, setResultSearch ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const resultRef = useRef();

  useEffect(() => {

    const debounceTimer = setTimeout(() => {

      // Aquí puedes realizar la llamada a la API con searchTerm
      if (searchTerm != '') {
          const searchFetch = async() => {
              setLoading(true)

              const getSearch = await GetFetch('/api/products/filter/'+searchTerm, {'Content-Type': 'application/json'});
              setResultSearch(getSearch);
              setLoading(false)
            }
            searchFetch()
    }else{
        setLoading(true)

    }
    }, 1000);

    return () => {
      // Limpiar el temporizador si el usuario sigue escribiendo
      clearTimeout(debounceTimer);
    };
  }, [searchTerm]);

  const handleChange = (event) => {
    // Actualizar el estado con el término de búsqueda
    setSearchTerm(event.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    resultRef.current.click();
  }

    return(
            <div className={`col-md-12 ${ className } `}>
                <form action="" className="col-md-9" onSubmit={ (e) => handleSubmit(e) }>
                    <Link to={"/shop/search/"+searchTerm} ref={ resultRef }></Link>
                    <input type="text" className="w-100" placeholder="Funda para Samsung" ref={ search } onChange={(e)=>handleChange(e)} />
                    <button type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                    { loading ?
                    <></>
                    :
                    <div className="search-results" id="search-results">
                        { resultSearch.map(result => {
                            return (
                                <a href={ `/product/detail/${ result.id }` } target="E_BLANK" className="search-results__result" key={result.id}>
                                    <div className="search-results__result--image">
                                        <img src={`/media/images/products/${result.file_path}/${JSON.parse(result.image)[0]}`} alt="" />
                                    </div>
                                    <p>{ result.name }</p>
                                </a>
                            );
                        })}

                    </div>
                    }
                </form>
                {
                    (cart)? <ShoppingCart className=""/> : <></>
                }

            </div>
    );
}

export default Search;
