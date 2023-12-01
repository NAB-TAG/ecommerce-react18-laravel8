import Breadcrumb from "../../components/Admin/Breadcrumb";
import RowTable from "../../components/Tables/RowTable";
import Table from "../../components/Tables/Table";
import '../../../css/admin/productsAdmin.css'
import { useEffect, useState } from "react";
import { DeleteFetch, GetFetch } from "../../hooks/Fetch.hook";
import ProductsAdminPaginator from "../../components/Paginators/ProductsAdminPaginator";
import { useSelector } from "react-redux";
import SweetAlert from "../../helpers/Alerts/SweetAlert2_class";
import DomFormater from "../../helpers/DomFormater_class";
import RowsTableSkeletons from "../../components/Skeletons/TablesSkeletons/RowsTableSkeletons";
import OptionsTable from "../../components/Tables/OptionsTable";
import Button from "../../components/Buttons/Button";
import { updatePagProducts } from "../../store/Slices/paginationSlice";
// import useStorage from '../../hooks/useStorage'

const ProductsAdmin = () => {
        const [ links, setLinks ] = useState([]);
        const [ products, setProducts ] = useState([]);
        const [ loading, setLoading ] = useState(true);
        // const [ statePag, setStatePag ] = useStorage('page-admin-product', '/api/categories?page=1')
        // statePag =localStorage.getItem('page-admin-product');
        let statePag = useSelector(( state ) => state.pagination.productAdmin );

        useEffect(() => {

            const fetchData = async () => {
                try {
                    setLoading(true)
                    const getProducts = await GetFetch(statePag, {'Content-Type': 'application/json'});

                    setProducts(getProducts.data);
                    setLoading(false);
                    setLinks(getProducts.links);

                } catch (error) {
                    console.log(error)
                }
            }
            fetchData();

        }, [statePag])

    const handleDelete = (e, id) => {

        e.preventDefault();
        const sweetAlert = new SweetAlert();
        sweetAlert.confirmationFetch(
            "Estas seguro?",
            "Estas seguro de eliminar el producto?",
            "question",
            () => DeleteFetch(`/api/product/${ id }/delete`),
            () => new DomFormater().delete(`row-table-product-admin-${id}`));
    }

    return (
        <div className="products-admin">
            {/* breadcrumb */}
             <Breadcrumb links={[
                { name: "Administracion", href: "/admin" },
                { name: "Mis Productos", href: "/products"},
            ]}/>


            <OptionsTable title="Mas opciones">
                <Button href='/admin/product/add' className="btn btn-success w-auto rounded-0">Crear Producto</Button>
                <Button href='/admin/coupons/add' className="btn btn-success w-auto rounded-0">Generar Cupones</Button>
            </OptionsTable>

            <div className="table-container">

            <Table col_1="#" col_2="Producto" col_3="Precio" col_4="Categoria" col_5="Estado" col_6="Stock" col_7="" col_8="">
                { loading ?
                <RowsTableSkeletons quantity={15} cols={6}/>
                :
                products && products.map( (product, index) => {
                    return (
                        <RowTable key={ index }
                            col_1={ product.id }
                            col_2={ product.name }
                            col_3={ product.price }
                            col_4={ product.category }
                            col_5={ product.status }
                            col_6={ product.stock }
                            editHref={ `/admin/product/edit/${ product.id }` }
                            deleteHref={ `/api/product/${ product.id }/delete` }
                            deleteSubmit={ (e) => handleDelete(e, product.id)}
                            classname={`row-table-product-admin-${product.id}`}
                            id={ product.id }
                            state={product}

                        />);
                } ) }
            </Table>

            {/* Cuando se cargue el fetch renderiza la paginacion */}
            { !loading && <ProductsAdminPaginator links={  links } href="/" /> }

            </div>
        </div>
    );
}

export default ProductsAdmin;
