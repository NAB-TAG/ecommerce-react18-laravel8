import Breadcrumb from "../../../components/Admin/Breadcrumb";
import Form from "../../../components/Forms/Form";
import ItemForm from "../../../components/Forms/ItemForm";
import { PostFetch } from "../../../hooks/Fetch.hook";
import { PRODUCT_FORM_ADD } from "./Product.data";

const ProductAddAdmin = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new FormData(event.target);
        PostFetch( PRODUCT_FORM_ADD.url, data);
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
                        <Form url={ PRODUCT_FORM_ADD.url } method="POST" onSubmit={(e) => handleSubmit(e)}>
                            { PRODUCT_FORM_ADD.inputs.map( (input, index) => {
                                return <ItemForm key={ index } data={ input }/>
                            }) }
                            <div className="col-lg-2 my-3">

                                <input type="submit" value={ PRODUCT_FORM_ADD.button } className="btn btn-success px-4 py-2" />
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProductAddAdmin;
