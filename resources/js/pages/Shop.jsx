import RangeForm from "../components/Forms/inputs/RangeForm";
import '../../css/shop/shop.css'
import Accordion from "../components/Accordion/Accordion";
import { PRODUCT_SIZES } from "./admin/products/Product.data";
import { GetFetch } from "../hooks/Fetch.hook";
import { useEffect, useState } from "react";
import ListProducts from "../components/Products/body/ListProducts";
import { useSelector } from "react-redux";

const Shop = () => {
    const [ categories, setCategories ] = useState([]);
    let stateSearch = useSelector(( state ) => state.search.searchProduct );
    const [ stateSearchProduct, setStateSearchProduct ] = useState(stateSearch)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const getCategories = await GetFetch('/api/categories/10', {'Content-Type': 'application/json'});
                setCategories(getCategories);
            } catch (error) {
                console.log(error)
            }
        }
        // end
        fetchData();
    },[])
    // useEffect(() => {

    //     setStateSearchProduct(stateSearch)
    // },[stateSearch])
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-3 filter p-3 rounded-4">
                    <div className="filter__header">
                        <h4 className="m-0">Filtrar:</h4>
                    </div>

                    <hr className="my-3"/>
                    {/* El input de rango para filtrar los precios. */}
                    <RangeForm min={0} max={270000} className="filter__price"/>
                    {/* end */}

                    <hr className="my-3"/>
                    {/* Acordeon de Talle para filtrar los talles. */}
                    <Accordion title="Talle" items={ PRODUCT_SIZES } name="sizes"/>
                    {/* end */}

                    <hr className="my-3"/>
                    {/* Acordeon de Talle para filtrar las categorias. */}
                    <Accordion title="Categorias" items={ categories && categories } name="categories"/>
                    {/* end */}

                </div>

                <div className="col-md-9">{
                    useEffect(()=>{
                        setStateSearchProduct(stateSearch);
                        // console.log(stateSearchProduct);

                        },[stateSearch])
                    }
                    <ListProducts className="products__lists" search={stateSearchProduct }/>
                </div>
            </div>
        </div>
    )
}

export default Shop;
