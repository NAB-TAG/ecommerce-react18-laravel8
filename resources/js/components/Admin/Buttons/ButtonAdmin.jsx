import { Link } from "react-router-dom";

const ButtonAdmin = ({ text, href, icon }) => {
    return(
        <Link to={ href } className="button-admin">
            <div className="button-admin__circle rounded-circle">
                <i className={ icon }></i>
            </div>

            <div className="button-admin__text"><p>{ text }</p></div>
        </Link>
    );
}

export default ButtonAdmin;
