import { Link } from "react-router-dom";
import StringFormater from "../../helpers/StringFormater.class";
import { useDispatch } from "react-redux";
import { updatePagProducts } from "../../store/Slices/paginationSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ProductsPaginator = ({ links, href }) => {
    const dispatch = useDispatch();
    let search = useSelector(( state ) => state.search.searchProduct );
    search = search == '' ? ' ' : search;
    const handleClick = (page) => {
        localStorage.setItem('page-product', page);
        // dispatch()
        console.log(`/api/products/search/${search}?${page}`)
        // '/api/products/search/%20/min=0/max=1000000000000/sizes=[]/colors=[]/categories=[]'
        dispatch(updatePagProducts( `/api/products/search/${search}/min=0/max=1000000000000/sizes=[]/colors=[]/categories=[]?${page}` ))
    }
    return (
        <nav aria-label="...">
            <ul className="pagination pagination-sm">
                { links.map(( link, index ) => {

                    let page = new StringFormater( link.url ).separator('?', 1);
                    let numPage = new StringFormater( link.url ).separator('=', 1);
                    let label = new StringFormater( link.label ).decode();

                    return (
                        <li className={ `page-item ${ (link.active || !link.url) ? 'disabled': ''}` } key={ index }>
                            <Link className="page-link px-1" to={ href + numPage } onClick={() => handleClick(page)}>{ label }</Link>
                        </li>
                    );
                }) }

            </ul>
        </nav>
    );
}

export default ProductsPaginator;
