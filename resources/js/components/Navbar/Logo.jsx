
import { activeClass } from "../../hooks/ClassSwitch.hook";
import MyAccount from "./myaccount/myaccount";
import ShoppingCart from "./shopping-cart/ShoppingCart";


const Logo = () => {
    return(
        <div className="col-md-3 navbar__logo">
            <div className="d-flex ">
                <button className="btn navbar__logo--btn" onClick={ () => activeClass( 'sidebar' ) }><i className="fa-solid fa-bars"></i></button>
                <a href="/">
                    <h1 className="m-0">NandoShop</h1>
                </a>
            </div>
            <div className="cart-mobile">
                <ShoppingCart className="navbar__logo--shopping-cart-mobile"/>
                <MyAccount className="navbar__logo--myaccount align-items-center d-flex"/>
            </div>
        </div>
    );
}

export default Logo
