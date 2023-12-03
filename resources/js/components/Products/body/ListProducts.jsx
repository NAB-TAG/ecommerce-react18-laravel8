import { useEffect, useState } from "react";
import NumberFormater from "../../../helpers/NumberFormater_class";
import Product from "./Product";
import { GetFetch } from "../../../hooks/Fetch.hook";
import { useSelector } from "react-redux";
import ProductsPaginator from "../../Paginators/ProductsPaginator";
import ProductsSkeletons from "../../Skeletons/ProductsSkeletons/ProductsSkeletons";


const ListProducts = ({ className, search = false }) => {
    const [ links, setLinks ] = useState([]);
    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    let statePag = useSelector(( state ) => state.pagination.product );
    search = search ? '/'+search  : ' ';

    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true)
                const getProducts = await GetFetch(statePag, {'Content-Type': 'application/json'});

                setProducts(getProducts.data);
                setLoading(false);
                setLinks(getProducts.links);

            } catch (error) {
                console.log(error)
            }
        }
        fetchData();

    }, [statePag])



    return(
        <div className={ className }>

            <div className="col-md-12 d-flex row justify-content-evenly" id="col-1">
                { loading ?
                    <ProductsSkeletons quantity={15}/>
                :
                <>
                {products.map((product, index) => {
                    return <Product className="product" key={product.id} {...product} state={ product && product } />
                })}
                <ProductsPaginator links={links} href="/shop/search/"/>
                {/* <ProductsSkeletons quantity={15}/> */}
                </>
                }
            </div>
        </div>
    );
}



export default ListProducts
