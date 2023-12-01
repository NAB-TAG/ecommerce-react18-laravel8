import { useLocation } from "react-router-dom";
import SweetAlert from "../../../helpers/Alerts/SweetAlert2_class";
import FormFormater from "../../../helpers/FormFormater_class";
import { PostFetch } from "../../../hooks/Fetch.hook";
import Breadcrumb from "../../../components/Admin/Breadcrumb";
import FormMaster from "../../../components/Forms/FormMaster";
import ItemForm from "../../../components/Forms/ItemForm";

const AdEditAdmin = () => {
    const location = useLocation();
    const list = location.state;
    const id = list.id;
    const alert = new SweetAlert()

    const handleSubmit = (values) => {
        const image = document.getElementById('image-form-editAd');
        // Parsea los datos del input image
        values.image = image.files;
        values.id = id;
        // Convierte los datos del formik en un FormData()
        // antes de eso parsea los valores de (colors,sizes) en formato json y los archivos de imagen de una forma mas facil para procesar por el servidor
        let formData = new FormFormater(values).parser([''],['image']);
        // console.log(values)

        alert.confirmationFetch('Estas seguro?', 'Estas seguro de editar el Anuncio?','question', () => PostFetch( `${AD_FORM_EDIT.url}` , formData));
    }

    const AD_INITIAL_VALUES = {
        id: id,
        title: list.title,
        link: list.link,
        image: null,
      };

    const AD_FORM_EDIT = {
        title: "Editar Anuncios",
        url: "/api/ad/edit/"+id,
        button: "Editar Anuncio",
        inputs: [
        { icon: "fa-solid fa-font", name: "title", type: "text", placeholder: "Ej: Zapatillas Negras", label: "Titulo del anuncio", col: "col-lg-6", value: list.title },
        { icon: "fa-solid fa-font", name: "link", type: "text", placeholder: "https://", label: "Link del anuncio", col: "col-lg-6", value: list.link },
        { icon: "fa-solid fa-image", name: "image", type: "file", label: "Imagen", col: "col-lg-4", id:"image-form-editAd", multiple: false, files: list.image, src: `/media/images/ads/${ list.file_path }/`},
    ]
    };
    return (
        <>
            <Breadcrumb links={[
                { name: "Administracion", href: "/admin" },
                { name: "Mis Anuncios", href: "/admin/ads"},
                { name: `Editar Anuncios : #${list.id}`, href: "/admin/ad/edit"},
            ]}/>

            <div className="ad-add-admin card card-info">
                <div className="card-body">
                    <div className="ad-add-admin__header">
                        <h2>{ AD_FORM_EDIT.title }</h2>
                    </div>

                    <div className="ad-add-admin__content">
                        <FormMaster url={ AD_FORM_EDIT.url } method="POST" onSubmit={ handleSubmit} initialValues={ AD_INITIAL_VALUES }>
                            { AD_FORM_EDIT.inputs.map( (input, index) => {
                                return <ItemForm key={ index } data={ input }/>
                            }) }
                            <div className="col-lg-2 my-3">

                                <input type="submit" value={ AD_FORM_EDIT.button } className="btn btn-success px-4 py-2" />
                            </div>
                        </FormMaster>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdEditAdmin;
