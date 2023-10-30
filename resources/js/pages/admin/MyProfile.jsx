import Breadcrumb from "../../components/Admin/Breadcrumb";

const MyProfile = () => {
    return (
        <>
            <Breadcrumb links={[
                { name: "Administracion", href: "/admin" },
                { name: "Mi cuenta", href: "/my_profile" },
            ]}/>
        </>
    );
}

export default MyProfile;
