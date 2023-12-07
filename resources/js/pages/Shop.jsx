import RangeForm from "../components/Forms/inputs/RangeForm";
import '../../css/shop/shop.css'
import Accordion from "../components/Accordion/Accordion";
import { PRODUCT_SIZES } from "./admin/products/Product.data";
import { GetFetch } from "../hooks/Fetch.hook";
import { useEffect, useState } from "react";
import ListProducts from "../components/Products/body/ListProducts";
import { useDispatch, useSelector } from "react-redux";
import RangeSkeleton from "../components/Skeletons/RangeSkeleton/RangeSkeleton";
import AccordionSkeleton from "../components/Skeletons/AccordionSkeletons/AccordionSkeleton";
import FormMaster from "../components/Forms/FormMaster"
import AccordionColor from "../components/Accordion/AccordionColor";
import AccordionColorSkeletons from "../components/Skeletons/AccordionSkeletons/AccordionColorSkeletons";
import { updatePagProducts } from "../store/Slices/paginationSlice";
import { updateCategoriesProducts, updateColorsProducts, updateSizesProducts } from "../store/Slices/searchSlice";

const Shop = () => {
    const [ categories, setCategories ] = useState([]);
    const [ rangePrices, setRangePrices ] = useState([]);
    const dispatch = useDispatch();

    const [ loading, setLoading ] = useState(true);
    let stateSearch = useSelector(( state ) => state.search.searchProduct );
    let storeMaxPrice = useSelector(( state ) => state.search.maxSearchProduct );
    let storeMinPrice = useSelector(( state ) => state.search.minSearchProduct );

    stateSearch = stateSearch == '' ? '%20': stateSearch;
    const [ stateSearchProduct, setStateSearchProduct ] = useState(stateSearch)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const getCategories = await GetFetch('/api/categories/10', {'Content-Type': 'application/json'});
                const getRangePrices = await GetFetch('/api/products/prices/search/'+stateSearch, {'Content-Type': 'application/json'});

                setRangePrices(getRangePrices);
                setCategories(getCategories);

                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        // end
        fetchData();
    },[stateSearch]);

    const handleSubmit = (values) => {
        let sizes = JSON.stringify(values.sizes);
        let colors = JSON.stringify(values.colors);
        let colorsV = values.colors;
        console.log(colors + " - " + colorsV)
        let categories = JSON.stringify(values.categories);
        // console.log(values)
        dispatch(updateSizesProducts(sizes));
        dispatch(updateColorsProducts(colors));
        dispatch(updateCategoriesProducts(categories));

        dispatch(updatePagProducts(`/api/products/search/${stateSearch}/min=${storeMinPrice}/max=${storeMaxPrice}/sizes=${sizes}/colors=${colors}/categories=${categories}`))
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-3 filter p-3 rounded-4">
                    <div className="filter__header">
                        <h4 className="m-0">Filtrar:</h4>
                    </div>


                    <FormMaster onSubmit={ handleSubmit } initialValues={{colors:[],sizes:[],categories:[]}}>

                        <hr className="my-3"/>
                        {/* El input de rango para filtrar los precios. */}
                        {loading && rangePrices ?
                            <RangeSkeleton min={0} max={1} className="filter__price-skeleton"/>
                        :
                            <RangeForm min={parseFloat(rangePrices[0])} max={parseFloat(rangePrices[1])} className="filter__price"/>
                        }
                        {/* end */}
                        <hr className="my-3"/>
                        {loading  ?
                            <AccordionColorSkeletons quantity={7}/>
                            :
                            // <AccordionColorSkeletons quantity={7}/>
                            <AccordionColor col="col-md-12 accordion-color" label="Color" />
                        }
                        <hr className="my-3"/>
                        {/* Acordeon de Talle para filtrar los talles. */}
                        {loading  ?
                            <AccordionSkeleton quantity={5}/>
                        :
                            <Accordion title="Talle" items={ PRODUCT_SIZES } name="sizes" type={ true }/>
                        }
                        {/* end */}

                        <hr className="my-3"/>
                        {/* Acordeon de Talle para filtrar las categorias. */}
                        { loading ?
                            <AccordionSkeleton quantity={8}/>
                            :
                            <Accordion title="Categorias" items={ categories && categories } name="categories" />
                        }
                        {/* end */}
                        <hr className="my-3" />
                        <button className="btn btn-primary filter__content--btn-submit" type="submit"><i className="fas fa-filter"></i> Filtrar</button>
                    </FormMaster>
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
