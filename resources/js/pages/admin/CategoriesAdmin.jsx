import Breadcrumb from "../../components/Admin/Breadcrumb";
import RowsTableSkeletons from "../../components/Skeletons/TablesSkeletons/RowsTableSkeletons";
import Table from "../../components/Tables/Table";
import OptionsTable from "../../components/Tables/OptionsTable";
import Button from "../../components/Buttons/Button";
import { useEffect, useState } from "react";
import RowTable from "../../components/Tables/RowTable";
import { useSelector } from "react-redux";
import { DeleteFetch, DeleteFetchAuth, GetFetch } from "../../hooks/Fetch.hook";
import CategoriesPaginator from "../../components/Paginators/CategoriesPaginator";
import SweetAlert from "../../helpers/Alerts/SweetAlert2_class";
import DomFormater from "../../helpers/DomFormater_class";
// import Paginator from "../../components/Paginators/ProductsPaginator";

const CategoriesAdmin = () => {
    const [ links, setLinks ] = useState([]);
    const [ categories, setCategories ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    let statePag = useSelector(( state ) => state.pagination.categoryAdmin );

    const handleDelete = (e, id) => {

        e.preventDefault();

        const sweetAlert = new SweetAlert();
        sweetAlert.confirmationFetch(
            "Estas seguro?",
            "Estas seguro de eliminar la categoria?",
            "question",
            () => DeleteFetchAuth(`/api/category/${ id }/delete`),
            () => new DomFormater().delete(`row-table-category-admin-${id}`));
    }

    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true)
                const getCategories = await GetFetch(statePag, {'Content-Type': 'application/json'});

                setCategories(getCategories.data);
                setLoading(false);
                setLinks(getCategories.links);

            } catch (error) {
                console.log(error)
            }
        }
        fetchData();

    }, [statePag])

    return (
        <div className="categories-admin">
            {/* breadcrumb */}
             <Breadcrumb links={[
                { name: "Administracion", href: "/admin" },
                { name: "Mis Categorias", href: "/categories"},
            ]}/>


            <OptionsTable title="Mas opciones">
                <Button href='/admin/category/add' className="btn btn-success w-auto rounded-0">Crear Categoria</Button>
            </OptionsTable>

            <div className="table-container">

            <Table col_1="#" col_2="Nombre" col_3="Icono" col_7="" col_8="">
                { loading ?
                <RowsTableSkeletons quantity={15} cols={3}/>
                :
                categories && categories.map( (category, index) => {
                    return (
                        <RowTable key={ index }
                            col_1={ category.id }
                            col_2={ category.name }
                            icon={ category.icon }
                            editHref={ `/admin/category/edit/${ category.id }` }
                            deleteHref={ `/api/category/${ category.id }/delete` }
                            deleteSubmit={ (e) => handleDelete(e, category.id)}
                            id={ category.id }
                            classname={ `row-table-category-admin-${category.id}`}
                            state={category}

                        />);
                } ) }
            </Table>

            {/* Cuando se cargue el fetch renderiza la paginacion */}
            { !loading && <CategoriesPaginator links={ links } href="/" /> }

            </div>
        </div>
    );
}

export default CategoriesAdmin;
