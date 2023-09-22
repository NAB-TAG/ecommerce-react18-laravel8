import { Link } from "react-router-dom";

const MyAccount = ({ className }) => {
    return (
        <div className={ `${ className }` }>
            <Link to="/myaccount">
                <i className="fas fa-user"></i>
            </Link>
        </div>
    )
}

export default MyAccount;
