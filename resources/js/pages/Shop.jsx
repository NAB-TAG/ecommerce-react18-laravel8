import RangeForm from "../components/Forms/inputs/RangeForm";
import '../../css/shop/shop.css'
import Accordion from "../components/Accordion/Accordion";
import { PRODUCT_SIZES } from "./admin/products/Product.data";
import { GetFetch } from "../hooks/Fetch.hook";
import { useEffect, useState } from "react";
import ListProducts from "../components/Products/body/ListProducts";
import { useSelector } from "react-redux";
import RangeSkeleton from "../components/Skeletons/RangeSkeleton/RangeSkeleton";
import AccordionSkeleton from "../components/Skeletons/AccordionSkeletons/AccordionSkeleton";

const Shop = () => {
    const [ categories, setCategories ] = useState([]);
    const [ rangePrices, setRangePrices ] = useState([]);

    const [ loading, setLoading ] = useState(true);
    let stateSearch = useSelector(( state ) => state.search.searchProduct );
    const [ stateSearchProduct, setStateSearchProduct ] = useState(stateSearch)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const getCategories = await GetFetch('/api/categories/10', {'Content-Type': 'application/json'});
                const getRangePrices = await GetFetch('/api/products/prices', {'Content-Type': 'application/json'});

                setRangePrices(getRangePrices);
                setCategories(getCategories);

                setLoading(false)
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
                    {loading && rangePrices ?
                        <RangeSkeleton min={0} max={1} className="filter__price-skeleton"/>
                    :
                        // <RangeSkeleton min={0} max={1} className="filter__price-skeleton"/>
                        <RangeForm min={parseFloat(rangePrices[0])} max={parseFloat(rangePrices[1])} className="filter__price"/>
                    }
                    {/* end */}

                    <hr className="my-3"/>
                    {/* Acordeon de Talle para filtrar los talles. */}
                    {loading  ?
                        <AccordionSkeleton quantity={5}/>
                    :
                        <Accordion title="Talle" items={ PRODUCT_SIZES } name="sizes"/>
                    }
                    {/* end */}

                    <hr className="my-3"/>
                    {/* Acordeon de Talle para filtrar las categorias. */}
                    { loading ?
                        <AccordionSkeleton quantity={8}/>
                        :
                        <Accordion title="Categorias" items={ categories && categories } name="categories"/>
                    }
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
