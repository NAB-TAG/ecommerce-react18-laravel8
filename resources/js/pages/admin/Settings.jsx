import Breadcrumb from "../../components/Admin/Breadcrumb";

const Settings = () => {
    return(
        <Breadcrumb links={[
            { name: "Administracion", href: "/admin" },
            { name: "Configuracion", href: "/settings" },
        ]}/>

    );
}

export default Settings;
