import StringFormater from "../../../helpers/StringFormater.class";

const LastsProductsAdmin = () => {

    const stringFormater = new StringFormater('Samsung galaxy A3 Plateado con funda gratis').constrainer(0,35);

    return(
        <div className="col-lg-7 lasts-products-admin">
            <div className="lasts-products-admin__header">
                <div className="lasts-products-admin__header--text">
                    <p>Ultimos Productos</p>
                    <span>Hay un total de 256 productos</span>
                </div>
                <div className="lasts-products-admin__header--filter">
                    <form action="">
                        <div className="lasts-products-filter-item">
                            <label htmlFor="lasts-products-filter-category">Categoria</label>
                            <select name="" id="lasts-products-filter-category">
                                <option value="">Mostrar todos</option>
                            </select>
                        </div>

                        <div className="lasts-products-filter-item">
                            <label htmlFor="lasts-products-filter-status">Estado</label>
                            <select name="" id="lasts-products-filter-status">
                                <option value="">Mostrar todos</option>
                            </select>
                        </div>


                        <button className="btn" type="submit">
                            Filtrar
                            <i className="fas fa-filter ms-2"></i>
                        </button>
                    </form>
                </div>
            </div>
            <div className="lasts-products-admin__content table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ultimos Productos</th>
                            <th scope="col">Creacion</th>
                            <th scope="col">Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">29</th>
                            <th>{ stringFormater }</th>
                            <th>10/10/23</th>
                            <th>10</th>
                        </tr>
                        <tr>
                            <th scope="row">28</th>
                            <th>{ stringFormater }</th>
                            <th>10/10/23</th>
                            <th>10</th>
                        </tr>
                        <tr>
                            <th scope="row">27</th>
                            <th>{ stringFormater }</th>
                            <th>10/10/23</th>
                            <th>10</th>
                        </tr>
                        <tr>
                            <th scope="row">26</th>
                            <th>{ stringFormater }</th>
                            <th>10/10/23</th>
                            <th>10</th>
                        </tr>
                        <tr>
                            <th scope="row">25</th>
                            <th>{ stringFormater }</th>
                            <th>10/10/23</th>
                            <th>10</th>
                        </tr>
                        <tr>
                            <th scope="row">24</th>
                            <th>{ stringFormater }</th>
                            <th>10/10/23</th>
                            <th>10</th>
                        </tr>
                        <tr>
                            <th scope="row">23</th>
                            <th>{ stringFormater }</th>
                            <th>10/10/23</th>
                            <th>10</th>
                        </tr>
                        <tr>
                            <th scope="row">22</th>
                            <th>{ stringFormater }</th>
                            <th>10/10/23</th>
                            <th>10</th>
                        </tr>
                    </tbody>
                </table>
                {/* view more start */}
                <div className="history-admin__content--view-more mt-4">
                    <a href="#">
                        Ver mas
                    </a>
                </div>
                {/* view more end */}
            </div>
        </div>
    );
}

export default LastsProductsAdmin;
