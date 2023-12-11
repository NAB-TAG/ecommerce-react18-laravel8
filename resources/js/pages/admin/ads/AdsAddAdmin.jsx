import Breadcrumb from "../../../components/Admin/Breadcrumb";
import FormMaster from "../../../components/Forms/FormMaster";
import ItemForm from "../../../components/Forms/ItemForm";
import SweetAlert from "../../../helpers/Alerts/SweetAlert2_class";
import FormFormater from "../../../helpers/FormFormater_class";
import { PostFetch } from "../../../hooks/Fetch.hook";
import { AD_FORM_ADD, AD_INITIAL_VALUES } from "./Ads.data";

const AdsAddAdmin = () => {
    let alert = new SweetAlert();

    const handleSubmit = (values) => {
        const image = document.getElementById('image-form-addAd');

        // Parsea los datos del input image
        values.image = image.files;
        // Convierte los datos del formik en un FormData()
        // antes de eso parsea los valores de (colors,sizes) en formato json y los archivos de imagen de una forma mas facil para procesar por el servidor
        let formData = new FormFormater(values).parser([], ['image']);
        console.log(values)
        alert.confirmationFetch('Estas seguro?', 'Estas seguro de crear el anuncio?','question', () => PostFetchAuth( AD_FORM_ADD.url, formData));

    }

    return(
        <>
            <Breadcrumb links={[
                { name: "Administracion", href: "/admin" },
                { name: "Mis Anuncios", href: "/admin/ads"},
                { name: `Agregar anuncio`, href: "/admin/ads/add"},
            ]}/>
            <div className="ads-add-admin card card-info">
                <div className="card-body">
                    <div className="ads-add-admin__header">
                        <h2>{ AD_FORM_ADD.title }</h2>
                    </div>

                    <div className="ads-add-admin__content">
                        <FormMaster url={ AD_FORM_ADD.url } method="POST" onSubmit={ handleSubmit} initialValues={ AD_INITIAL_VALUES }>
                            { AD_FORM_ADD.inputs.map( (input, index) => {
                                return <ItemForm key={ index } data={ input }/>
                            }) }
                            <div className="col-lg-2 my-3">

                                <input type="submit" value={ AD_FORM_ADD.button } className="btn btn-success px-4 py-2" />
                            </div>
                        </FormMaster>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdsAddAdmin;
