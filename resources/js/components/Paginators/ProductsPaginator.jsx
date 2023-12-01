import { Link } from "react-router-dom";
import StringFormater from "../../helpers/StringFormater.class";
import { useDispatch } from "react-redux";
import { updatePagProducts } from "../../store/Slices/paginationSlice";

const ProductsPaginator = ({ links, href }) => {
    const dispatch = useDispatch();

    const handleClick = (page) => {
        localStorage.setItem('page-product', page);
        // dispatch()
        dispatch(updatePagProducts( page ))
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
