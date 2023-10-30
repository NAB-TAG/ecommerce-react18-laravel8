import Breadcrumb from "../../components/Admin/Breadcrumb";
import RowTable from "../../components/Tables/RowTable";
import Table from "../../components/Tables/Table";
import '../../../css/admin/productsAdmin.css'
import { Link } from "react-router-dom";

const products = [
    {id:1, name:"optimus prime", price: 300, shipment: "Gratis", category: "Juguetes", status: "Verificado", updated_at: "10/12/23", stock: 3},
    {id:2, name:"optimus prime", price: 300, shipment: "Gratis", category: "Juguetes", status: "Verificado", updated_at: "10/12/23", stock: 3},
    {id:3, name:"optimus prime", price: 300, shipment: "Gratis", category: "Juguetes", status: "Verificado", updated_at: "10/12/23", stock: 3},
    {id:4, name:"optimus prime", price: 300, shipment: "Gratis", category: "Juguetes", status: "Verificado", updated_at: "10/12/23", stock: 3},
    {id:5, name:"optimus prime", price: 300, shipment: "Gratis", category: "Juguetes", status: "Verificado", updated_at: "10/12/23", stock: 3},
    {id:6, name:"optimus prime", price: 300, shipment: "Gratis", category: "Juguetes", status: "Verificado", updated_at: "10/12/23", stock: 3},

]

const ProductsAdmin = () => {

    document.addEventListener('DOMContentLoaded',() => {

        let sidebar = document.getElementById('sidebar-admin');
        console.log(sidebar)
    })

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
                <div className="products-admin__content d-flex justify-content-sm-end">
                    <Link to={ '/admin/product/add' } className="btn btn-success me-2">Crear Producto</Link>
                    <button className="btn btn-success me-2">Generar Cupones</button>
                    <button className="btn btn-success">Cambiar Descuentos</button>
                </div>
            </div>

            <div className="table-container">

            <Table col_1="#" col_2="Producto" col_3="Precio" col_4="Categoria" col_5="Estado" col_6="Stock" col_7="" col_8="">
                { products.map( (product, index) => {
                    return (
                        <RowTable key={ index }
                            col_1={ product.id }
                            col_2={ product.name }
                            col_3={ product.price }
                            col_4={ product.category }
                            col_5={ product.status }
                            col_6={ product.stock }
                            editHref={ `api/product/${ product.id }/edit` }
                            deleteHref={ `api/product/${ product.id }/delete` }
                        />);
                } ) }
            </Table>
            </div>
        </div>
    );
}

export default ProductsAdmin;
