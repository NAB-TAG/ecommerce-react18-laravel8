import ListProducts from "./body/ListProducts";
import HeaderProduct from "./header/HeaderProduct";
import '../../../css/products/products.css';



const Products = () => {

    return(
        <div className="products col-md-12 mt-5">
            <HeaderProduct title="SuperOfertas" className="products__header"/>
            <ListProducts className="products__lists" />
        </div>
    );
}

export default Products
