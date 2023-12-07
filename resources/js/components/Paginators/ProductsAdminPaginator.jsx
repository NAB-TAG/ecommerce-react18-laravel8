import { Link } from "react-router-dom";
import StringFormater from "../../helpers/StringFormater.class";
import { useDispatch, useSelector } from "react-redux";
import { updatePagAdminProducts } from "../../store/Slices/paginationSlice";

const ProductsAdminPaginator = ({ links, href }) => {
    const dispatch = useDispatch();
    const search = useSelector(( state ) => state.search.searchProduct );

    const handleClick = (page) => {
        // e.preventDefault();
        localStorage.setItem('page-admin-product', page);
        // dispatch()
        dispatch(updatePagAdminProducts( `/api/products/search/${search}/min=0/max=1000000000000/sizes=[]/colors=[]/categories=[]?${page}` ))
    }
    return (
        <nav aria-label="...">
            <ul className="pagination pagination-sm">
                { links.map(( link, index ) => {
                    let page = new StringFormater( link.url ).separator('?', 1);
                    let numPage = new StringFormater( page ).separator('=', 1);
                    let label = new StringFormater( link.label ).decode();

                    return (
                        <li className={ `page-item ${ (link.active || !link.url) ? 'disabled': ''}` } key={ index }>
                            {/* <Link className="page-link px-1" to={ numPage } onClick={() => handleClick(page)}>{ label }</Link> */}
                            <Link to={numPage} onClick={(e) => {handleClick(page)}} className="page-link px-1">{label}</Link>
                        </li>
                    );
                }) }

            </ul>
        </nav>
    );
}

export default ProductsAdminPaginator;
