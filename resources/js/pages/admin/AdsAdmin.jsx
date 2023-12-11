import { useEffect, useState } from "react";
import Breadcrumb from "../../components/Admin/Breadcrumb";
import Button from "../../components/Buttons/Button";
import RowsTableSkeletons from "../../components/Skeletons/TablesSkeletons/RowsTableSkeletons";
import OptionsTable from "../../components/Tables/OptionsTable";
import Table from "../../components/Tables/Table";
import { DeleteFetch, DeleteFetchAuth, GetFetch } from "../../hooks/Fetch.hook";
import { useSelector } from "react-redux";
import RowTable from "../../components/Tables/RowTable";
import SweetAlert from "../../helpers/Alerts/SweetAlert2_class";
import DomFormater from "../../helpers/DomFormater_class";
import AdsPaginator from "../../components/Paginators/AdsPaginator";

const AdsAdmin = () => {
    let statePag = useSelector(( state ) => state.pagination.adAdmin );
    const [ ads, setAds ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ links, setLinks ] = useState([]);

    const handleDelete = (e, id) => {
        e.preventDefault();
        const sweetAlert = new SweetAlert();
        sweetAlert.confirmationFetch(
            "Estas seguro?",
            "Estas seguro de eliminar el anuncio?",
            "question",
            () => DeleteFetchAuth(`/api/ad/${ id }/delete`),
            () => new DomFormater().delete(`row-table-ad-admin-${id}`));
    }

    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true)
                const getAds = await GetFetch(statePag, {'Content-Type': 'application/json'});

                setAds(getAds.data);
                setLoading(false);
                setLinks(getAds.links);

            } catch (error) {
                console.log(error)
            }
        }
        fetchData();

    }, [statePag])

    return(
        <div className="ads-admin">
            <Breadcrumb links={[
                { name: "Administracion", href: "/admin" },
                { name: "Mis Anuncios", href: "/admin/ads"},
            ]}/>

            <OptionsTable title="Mas opciones">
                <Button href='/admin/ads/add' className="btn btn-success w-auto rounded-0">Crear Anuncio</Button>
            </OptionsTable>

            <div className="table-container">

            <Table col_1="#" col_2="Titulo" col_3="Imagen" col_4="" col_5="">
                { loading ?
                <RowsTableSkeletons quantity={15} cols={2}/>
                :
                ads && ads.map( (ad, index) => {
                    return (
                        <RowTable key={ index }
                            col_1={ ad.id }
                            col_2={ ad.title }
                            image={ `/media/images/ads/${ ad.file_path }/${ JSON.parse(ad.image) }` }
                            editHref={ `/admin/ad/edit/${ ad.id }` }
                            deleteHref={ `/api/ad/${ ad.id }/delete` }
                            deleteSubmit={ (e) => handleDelete(e, ad.id)}
                            classname={`row-table-ad-admin-${ad.id}`}
                            id={ ad.id }
                            state={ad}

                        />);
                } ) }
            </Table>
            {/* Cuando se cargue el fetch renderiza la paginacion */}
            { !loading && <AdsPaginator links={ links } href="/" /> }
            </div>
        </div>
    );
}

export default AdsAdmin;
