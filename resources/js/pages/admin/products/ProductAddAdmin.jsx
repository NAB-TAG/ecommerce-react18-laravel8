import Breadcrumb from "../../../components/Admin/Breadcrumb";
import FormMaster from "../../../components/Forms/FormMaster";
import ItemForm from "../../../components/Forms/ItemForm";
import { GetFetch, PostFetch, PostFetchAuth } from "../../../hooks/Fetch.hook";
import { PRODUCT_INITIAL_VALUES, PRODUCT_COLORS } from "./Product.data";
import "../../../../css/products/productAdd.css";
import FormFormater from "../../../helpers/FormFormater_class";
import SweetAlert from "../../../helpers/Alerts/SweetAlert2_class";
import { useEffect, useState } from "react";

const ProductAddAdmin = () => {
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                // setLoading(true)
                const getCategories = await GetFetch('/api/categories', {'Content-Type': 'application/json'});

                setCategories(getCategories.data);
                // setLoading(false);
                // setLinks(getProducts.links);

            } catch (error) {
                console.log(error)
            }
        }
        fetchData();

    }, [])
    const PRODUCT_FORM_ADD = {
        title: "Agrega un nuevo producto",
        url: "/api/product/add",
        button: "Agregar Producto",
        inputs: [
          { icon: "fa-solid fa-font", name: "name", type: "text", placeholder: "Ej: Zapatillas Negras", label: "Nombre del Producto", col: "col-lg-4" },
          { icon: "fas fa-dollar", name: "price", type: "number", placeholder: "Ej: 3400", label: "Precio", col: "col-lg-4" },
          { icon: "fa-solid fa-tags", name: "if_discount", type: "select", col: "col-lg-4", options: [{id:0, name:"No"}, {id:1, name:"Si"}], label: "Esta en descuento?" },
          { icon: "fa-solid fa-percent", name: "discount", type: "number", placeholder: "Ej: 40", label: "Descuento", col: "col-lg-3" },
          { icon: "fa-solid fa-cart-flatbed", name: "stock", type: "number", placeholder: "Ej: 30", col: "col-lg-2", label: "Stock" },
          { icon: "fas fa-border-all", name: "category_id", type: "select", col: "col-lg-4", options: categories && categories, label: "Categoria" },
          { icon: "fa-solid fa-truck-ramp-box", name: "shipment", type: "select", col: "col-lg-3", options: [{id:0, name:"Gratis"}, {id:1, name:"Pago"}], label: "Envio" },
          { icon: "", name: "colors", type: "color", col: "col-lg-auto", options: PRODUCT_COLORS, label: "Elige los colores" },
          { name: "sizes", type: "size", col: "col-lg-auto", label: "Elige las tallas" },
          { icon: "fa-solid fa-image", name: "image", type: "file", label: "Imagen", col: "col-lg-4", id:"image-form-addProducts", multiple: true},
          { icon: "fa-solid fa-rectangle-list", name: "description", type: "textarea", placeholder: "Hola", label: "Detalles del Producto", col: "col-lg-12" },
      ]
    };


    let alert = new SweetAlert();
    const handleSubmit = (values) => {
        const image = document.getElementById('image-form-addProducts');

        // Parsea los datos del input image
        values.image = image.files;
        // Convierte los datos del formik en un FormData()
        // antes de eso parsea los valores de (colors,sizes) en formato json y los archivos de imagen de una forma mas facil para procesar por el servidor
        let formData = new FormFormater(values).parser(['colors', 'sizes'], ['image']);
        console.log(values)
        alert.confirmationFetch('Estas seguro?', 'Estas seguro de guardar el producto?','question', () => PostFetchAuth( PRODUCT_FORM_ADD.url, formData));

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
{/* {console.log(categories)} */}
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
