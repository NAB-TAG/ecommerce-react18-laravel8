import Breadcrumb from "../../../components/Admin/Breadcrumb";
import FormMaster from "../../../components/Forms/FormMaster";
import ItemForm from "../../../components/Forms/ItemForm";
import SweetAlert from "../../../helpers/Alerts/SweetAlert2_class";
import FormFormater from "../../../helpers/FormFormater_class";
import { CATEGORY_FORM_ADD, CATEGORY_INITIAL_VALUES } from './Categories.data'
import { PostFetch, PostFetchAuth } from '../../../hooks/Fetch.hook';

const CategoryAddAdmin = () => {
    let alert = new SweetAlert();
    const handleSubmit = (values) => {

        // Convierte los datos del formik en un FormData()
        // antes de eso parsea los valores de (colors,sizes) en formato json y los archivos de imagen de una forma mas facil para procesar por el servidor
        let formData = new FormFormater(values).parser();

        alert.confirmationFetch('Estas seguro?', 'Estas seguro de crear la categoria?','question', () => PostFetchAuth( CATEGORY_FORM_ADD.url, formData));

    }
    return(
        <>
            <Breadcrumb links={[
                { name: "Administracion", href: "/admin" },
                { name: "Mis Categorias", href: "/admin/categories"},
                { name: "Agregar Categoria", href: "/admin/categoriy/add"},
            ]}/>

            <div className="category-add-admin card card-info">
                <div className="card-body">
                    <div className="category-add-admin__header">
                        <h2>{ CATEGORY_FORM_ADD.title }</h2>
                    </div>

                    <div className="category-add-admin__content">
                        <FormMaster url={ CATEGORY_FORM_ADD.url } method="POST" onSubmit={ handleSubmit } initialValues={ CATEGORY_INITIAL_VALUES }>
                            { CATEGORY_FORM_ADD.inputs.map( (input, index) => {
                                return <ItemForm key={ index } data={ input }/>
                            }) }
                            <div className="col-lg-2 my-3">

                                <input type="submit" value={ CATEGORY_FORM_ADD.button } className="btn btn-success px-4 py-2" />
                            </div>
                        </FormMaster>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryAddAdmin;
