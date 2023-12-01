import { Link } from "react-router-dom";

const Button = ({ children, href, className }) => {
    return(
        // '/admin/product/add'
        <Link to={ href } className={ className }>
            { children }
        </Link>
    );
}

export default Button;
