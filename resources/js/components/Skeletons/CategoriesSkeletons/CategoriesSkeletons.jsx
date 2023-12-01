import CategorySkeleton from "./CategorySkeleton";
import './CategoriesSkeletons.css'
const CategoriesSkeletons = ({ quantity }) => {
    return (
        <>
            { [...Array( quantity )].map(( row, index ) => {
                return <CategorySkeleton key={ index } />;
            })}
        </>
    );
}

export default CategoriesSkeletons;
