import Breadcrumb from "../../../components/Admin/Breadcrumb";
import FormMaster from "../../../components/Forms/FormMaster";
import ItemForm from "../../../components/Forms/ItemForm";
import { PostFetch } from "../../../hooks/Fetch.hook";
import { PRODUCT_FORM_ADD, PRODUCT_INITIAL_VALUES } from "./Product.data";
import "../../../../css/products/productAdd.css";
import FormFormater from "../../../helpers/FormFormater_class";
import SweetAlert from "../../../helpers/Alerts/SweetAlert2_class";

const ProductAddAdmin = () => {
    let alert = new SweetAlert();
    const handleSubmit = (values) => {
        const image = document.getElementById('image-form-addProducts');

        // Parsea los datos del input image
        values.image = image.files;

        // Convierte los datos del formik en un FormData()
        // antes de eso parsea los valores de (colors,sizes) en formato json y los archivos de imagen de una forma mas facil para procesar por el servidor
        let formData = new FormFormater(values).parser(['colors', 'sizes'], ['image']);

        alert.confirmationFetch('Estas seguro?', 'Estas seguro de guardar el producto?','question', () => PostFetch( PRODUCT_FORM_ADD.url, formData));

    }



    return(
        <>
             <Breadcrumb links={[
                { name: "Administracion", href: "/admin" },
                { name: "Mis Productos", href: "/admin/products"},
                { name: "Agregar Producto", href: "/product/add"},
            ]}/>

            <div className="product-add-admin card card-info">
                <div className="card-body">
                    <div className="product-add-admin__header">
                        <h2>{ PRODUCT_FORM_ADD.title }</h2>
                    </div>

                    <div className="product-add-admin__content">
                        <FormMaster url={ PRODUCT_FORM_ADD.url } method="POST" onSubmit={ handleSubmit} initialValues={ PRODUCT_INITIAL_VALUES }>
                            { PRODUCT_FORM_ADD.inputs.map( (input, index) => {
                                return <ItemForm key={ index } data={ input }/>
                            }) }
                            <div className="col-lg-2 my-3">

                                <input type="submit" value={ PRODUCT_FORM_ADD.button } className="btn btn-success px-4 py-2" />
                            </div>
                        </FormMaster>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProductAddAdmin;
