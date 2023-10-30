import AdminFeature from "../../components/Admin/AdminFeature";
import Breadcrumb from "../../components/Admin/Breadcrumb";
import ButtonAdmin from "../../components/Admin/Buttons/ButtonAdmin";
import HistoryAdmin from "../../components/Admin/History/HistoryAdmin";
import LastsProductsAdmin from "../../components/Admin/LastsProducts/LastsProductsAdmin";

const HomeAdmin = () => {
    return (
        <>
            <Breadcrumb links={[
                { name: "Administracion", href: "/admin" },
            ]}/>

            <div className="row d-flex justify-content-between container p-0 m-auto">
                <AdminFeature name="Ventas" value="377 Ventas" icon="fas fa-shopping-bag" color="primary"/>
                <AdminFeature name="Ganancias" value="+$27.345" icon="fa-solid fa-money-bill-trend-up" color="success" />
                <AdminFeature name="Seguidores" value="37 Seguidores" icon="fas fa-users" color="warning" />
                <AdminFeature name="Tus Productos" value="34 Productos" icon="fas fa-boxes-stacked" color="danger" />
            </div>

            <div className="row d-flex justify-content-center container p-0 my-4 mx-auto">
                <ButtonAdmin text="Productos" icon="fas fa-boxes-stacked" href="products"/>
                <ButtonAdmin text="Categorias" icon="fa-solid fa-border-all" href="categories"/>{/*fa-regular fa-folder-open*/}
                <ButtonAdmin text="Anuncios" icon="fa-solid fa-rectangle-ad" href="ads"/>

            </div>

            <div className="row d-flex justify-content-between container p-0 m-auto">

                <HistoryAdmin />
                <LastsProductsAdmin />
            </div>

        </>
    );
}

export default HomeAdmin;
