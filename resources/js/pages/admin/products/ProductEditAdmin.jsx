import { useLocation } from "react-router-dom";
import FormMaster from "../../../components/Forms/FormMaster";


const ProductEditAdmin = () => {
    const location = useLocation();
    const list = location.state;

    return <FormMaster />;
}

export default ProductEditAdmin;
