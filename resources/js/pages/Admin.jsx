import SidebarAdmin from "../components/Admin/Sidebar/SidebarAdmin";
import '../../css/admin/admin.css';
import Breadcrumb from "../components/Admin/Breadcrumb";
import AdminRouter from "../routes/AdminRouter";

const Admin = () => {
    return (
        <section className="admin">
            <SidebarAdmin />

            <div className="container">
                <AdminRouter />
            </div>
        </section>
    );
}

export default Admin;
