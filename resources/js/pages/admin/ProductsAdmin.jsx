import Breadcrumb from "../../components/Admin/Breadcrumb";
import RowTable from "../../components/Tables/RowTable";
import Table from "../../components/Tables/Table";
import '../../../css/admin/productsAdmin.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DeleteFetch, GetFetch } from "../../hooks/Fetch.hook";
import RowTableSkeleton from "../../components/Skeletons/TablesSkeletons/RowTableSkeleton";
import Paginator from "../../components/Paginators/Paginator";
import { useSelector } from "react-redux";
import SweetAlert from "../../helpers/Alerts/SweetAlert2_class";
import DomFormater from "../../helpers/DomFormater_class";

const ProductsAdmin = () => {
        const [ links, setLinks ] = useState([]);
        const [ products, setProducts ] = useState([]);
        const [ loading, setLoading ] = useState(true);
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


            <div className=" my-3">
                <div className="products-admin__header">
                    <h3>Opciones</h3>
                </div>
                <div className="products-admin__content d-flex justify-content-sm-end row gap-1">
                    <Link to={ '/admin/product/add' } className="btn btn-success m-1 col-sm-2 d-flex align-items-center m-sm-3">Crear Producto</Link>
                    <button className="btn btn-success m-1 col-sm-2 d-flex align-items-center m-sm-3">Generar Cupones</button>
                    <button className="btn btn-success m-1 col-sm-2 d-flex align-items-center m-sm-3">Cambiar Descuentos</button>
                </div>
            </div>

            <div className="table-container">

            <Table col_1="#" col_2="Producto" col_3="Precio" col_4="Categoria" col_5="Estado" col_6="Stock" col_7="" col_8="">
                { loading ?
                    (
                        <>
                            <RowTableSkeleton col_1="" col_2="" col_3="" col_4="" col_5="" col_6="" editHref={ `disabled` } deleteHref={ `disabled` }/>
                            <RowTableSkeleton col_1="" col_2="" col_3="" col_4="" col_5="" col_6="" editHref={ `disabled` } deleteHref={ `disabled` }/>
                            <RowTableSkeleton col_1="" col_2="" col_3="" col_4="" col_5="" col_6="" editHref={ `disabled` } deleteHref={ `disabled` }/>
                            <RowTableSkeleton col_1="" col_2="" col_3="" col_4="" col_5="" col_6="" editHref={ `disabled` } deleteHref={ `disabled` }/>
                            <RowTableSkeleton col_1="" col_2="" col_3="" col_4="" col_5="" col_6="" editHref={ `disabled` } deleteHref={ `disabled` }/>
                            <RowTableSkeleton col_1="" col_2="" col_3="" col_4="" col_5="" col_6="" editHref={ `disabled` } deleteHref={ `disabled` }/>
                            <RowTableSkeleton col_1="" col_2="" col_3="" col_4="" col_5="" col_6="" editHref={ `disabled` } deleteHref={ `disabled` }/>
                            <RowTableSkeleton col_1="" col_2="" col_3="" col_4="" col_5="" col_6="" editHref={ `disabled` } deleteHref={ `disabled` }/>
                        </>
                    )
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
                            id={ product.id }
                            state={product}

                        />);
                } ) }
            </Table>

            { !loading && <Paginator links={  links } href="/" /> }


            </div>
        </div>
    );
}

export default ProductsAdmin;
