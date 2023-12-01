import { useLocation } from "react-router-dom";
import Breadcrumb from "../../../components/Admin/Breadcrumb";
import FormMaster from "../../../components/Forms/FormMaster";
import ItemForm from "../../../components/Forms/ItemForm";
import SweetAlert from "../../../helpers/Alerts/SweetAlert2_class";
import FormFormater from "../../../helpers/FormFormater_class";
import { PostFetch } from "../../../hooks/Fetch.hook";

const CategoryEditAdmin = () => {
    const location = useLocation();
    const list = location.state;
    const id = list.id;
    const alert = new SweetAlert();

    const PRODUCT_INITIAL_VALUES = {
        id: id,
        name: list.name,
        icon: list.icon,
      };

    const CATEGORY_FORM_EDIT = {
        title: "Editar la categoria",
        url: `/api/category/edit/${ id }`,
        button: "Editar Categoria",
        inputs: [
            { icon: "fa-solid fa-font", name: "name", type: "text", placeholder: "Ej: Ropa Hombres", label: "Nombre del Producto", col: "col-lg-6", value: list.name },
            { icon: "fa-solid fa-font", name: "icon", type: "text", placeholder: "Ej: fas fa-home", label: "Clase del icono", col: "col-lg-6", value: list.icon },
        ]
    };

    const handleSubmit = (values) => {
        let formData = new FormFormater(values).parser();
        alert.confirmationFetch('Estas seguro?', 'Estas seguro de editar la categoria?','question', () => PostFetch( `${CATEGORY_FORM_EDIT.url}` , formData));
    }

    return(
        <>
            <Breadcrumb links={[
                { name: "Administracion", href: "/admin" },
                { name: "Mis Productos", href: "/admin/categories"},
                { name: `Editar categorias : #${list.id}`, href: "/admin/category/edit/"+list.id},
            ]}/>

            <div className="category-add-admin card card-info">
                <div className="card-body">
                    <div className="category-add-admin__header">
                        <h2>{ CATEGORY_FORM_EDIT.title }</h2>
                    </div>

                    <div className="category-add-admin__content">
                        <FormMaster url={ CATEGORY_FORM_EDIT.url } method="POST" onSubmit={ handleSubmit} initialValues={ PRODUCT_INITIAL_VALUES }>
                            { CATEGORY_FORM_EDIT.inputs.map( (input, index) => {
                                return <ItemForm key={ index } data={ input }/>
                            }) }
                            <div className="col-lg-2 my-3">

                                <input type="submit" value={ CATEGORY_FORM_EDIT.button } className="btn btn-success px-4 py-2" />
                            </div>
                        </FormMaster>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryEditAdmin;
