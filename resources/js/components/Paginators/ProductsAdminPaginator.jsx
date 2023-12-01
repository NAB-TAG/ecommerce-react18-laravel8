import { Link } from "react-router-dom";
import StringFormater from "../../helpers/StringFormater.class";
import { useDispatch } from "react-redux";
import { updatePagAdminProducts } from "../../store/Slices/paginationSlice";

const ProductsAdminPaginator = ({ links, href }) => {
    const dispatch = useDispatch();

    const handleClick = (page) => {
        localStorage.setItem('page-admin-product', page);
        // dispatch()
        dispatch(updatePagAdminProducts( page ))
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
                            <Link className="page-link px-1" to={ numPage } onClick={() => handleClick(page)}>{ label }</Link>
                        </li>
                    );
                }) }

            </ul>
        </nav>
    );
}

export default ProductsAdminPaginator;
