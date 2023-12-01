import ProductSkeleton from "./ProductSkeleton";
import './ProductsSkeletons.css'

const ProductsSkeletons = ( {quantity} ) => {
    return (
        <div className="col-md-12 d-flex row justify-content-evenly">
            { [...Array( quantity )].map(( row, index ) => {
                return <ProductSkeleton key={ index } className="product-skeleton"/>;
            })}
        </div>
    );
}

export default ProductsSkeletons;
