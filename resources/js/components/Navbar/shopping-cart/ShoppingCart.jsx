import CartDropdown from "../../Dropdowns/CartDropdown";
const PRODUCTS_CART = [
    { id: 1, name: "Alcatel 3-A 4G", price: 340, quantity: 10, stock: 20 },
    { id: 2, name: "Alcatel 3-A 3G", price: 340, quantity: 2, stock: 4 },
    { id: 3, name: "Peugot modelo 5 3 puertas con perro incluido", price: 150, quantity: 3, stock: 10 },

];
const ShoppingCart = ({className}) => {
    return(
        <div className={ `col-md-2 justify-content-end align-items-end d-flex cart ${ className }` }>
            <CartDropdown text={ "Carrito" } items={ PRODUCTS_CART }/>
        </div>
    );
}

export default ShoppingCart;
