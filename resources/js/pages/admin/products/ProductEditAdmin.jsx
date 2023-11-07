import { useLocation } from "react-router-dom";
import FormMaster from "../../../components/Forms/FormMaster";
import Breadcrumb from "../../../components/Admin/Breadcrumb";
import { PRODUCT_COLORS, PRODUCT_INITIAL_VALUES } from "./Product.data";
import ItemForm from "../../../components/Forms/ItemForm";

const ProductEditAdmin = () => {
    const location = useLocation();
    const list = location.state;
    // console.log(list)
    const handleSubmit = () => {
        alert("s")
    }

    const PRODUCT_FORM_EDIT = {
        title: "Edita el producto",
        url: "/api/product/edit",
        button: "Editar Producto",
        inputs: [
          { icon: "fa-solid fa-font", name: "name", type: "text", placeholder: "Ej: Zapatillas Negras", label: "Nombre del Producto", col: "col-lg-4", value: list.name },
          { icon: "fas fa-dollar", name: "price", type: "number", placeholder: "Ej: 3400", label: "Precio", col: "col-lg-4", value: list.price },
          { icon: "fa-solid fa-tags", name: "if_discount", type: "select", col: "col-lg-4", options: [{id:0, name:"No"}, {id:1, name:"Si"}], label: "Esta en descuento?" },
          { icon: "fa-solid fa-percent", name: "discount", type: "number", placeholder: "Ej: 40", label: "Descuento", col: "col-lg-3", value: list.discount },
          { icon: "fa-solid fa-cart-flatbed", name: "stock", type: "number", placeholder: "Ej: 30", col: "col-lg-2", label: "Stock", value: list.stock },
          { icon: "fas fa-border-all", name: "category_id", type: "select", col: "col-lg-4", options: [{id:0, name:"Ropa hombre"}, {id:1, name:"Ropa Mujer"}], label: "Categoria", checked: "1" },
          { icon: "fa-solid fa-truck-ramp-box", name: "shipment", type: "select", col: "col-lg-3", options: [{id:0, name:"Gratis"}, {id:1, name:"Pago"}], label: "Envio" },
          { icon: "", name: "colors", type: "color", col: "col-lg-auto", options: PRODUCT_COLORS, label: "Elige los colores", value:list.colors },
          { name: "sizes", type: "size", col: "col-lg-auto", label: "Elige las tallas", value:list.sizes },
          { icon: "fa-solid fa-image", name: "image", type: "file", label: "Imagen", col: "col-lg-4", id:"image-form-addProducts", files: list.image, src: `/media/images/products/${ list.file_path }/`},
          { icon: "fa-solid fa-rectangle-list", name: "description", type: "textarea", placeholder: "Hola", label: "Detalles del Producto", col: "col-lg-12", value: list.description },
      ]
    };
    return (
        <>
            <div>
                <Breadcrumb links={[
                    { name: "Administracion", href: "/admin" },
                    { name: "Mis Productos", href: "/admin/products"},
                    { name: `Editar producto : #${list.id}`, href: "/products"},
                ]}/>
            </div>

            <div className="product-add-admin card card-info">
                <div className="card-body">
                    <div className="product-add-admin__header">
                        <h2>{ PRODUCT_FORM_EDIT.title }</h2>
                    </div>

                    <div className="product-add-admin__content">
                        <FormMaster url={ PRODUCT_FORM_EDIT.url } method="POST" onSubmit={ handleSubmit} initialValues={ PRODUCT_INITIAL_VALUES }>
                            { PRODUCT_FORM_EDIT.inputs.map( (input, index) => {
                                return <ItemForm key={ index } data={ input }/>
                            }) }
                            <div className="col-lg-2 my-3">

                                <input type="submit" value={ PRODUCT_FORM_EDIT.button } className="btn btn-success px-4 py-2" />
                            </div>
                        </FormMaster>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductEditAdmin;
