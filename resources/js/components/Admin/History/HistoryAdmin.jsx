const HistoryAdmin = () => {
    return (
        <div className="col-lg-5 history-admin">
            <div className="history-admin__header">
                <div className="history-admin__header--text">
                    <p>Historial</p>
                    <span>370 elementos</span>
                </div>
            </div>

            <div className="history-admin__content">
                <div className="history-admin__content--item">
                    <div className="history-admin__content--item-date">
                        <p>23/10/23</p>
                        <span>13:10</span>
                    </div>

                    <div className="history-admin__content--item-color primary"></div>

                    <div className="history-admin__content--item-text">
                        <p className="m-0">Nueva orden en el producto #XF-2356.</p>
                    </div>
                </div>
                <hr />
                <div className="history-admin__content--item">
                    <div className="history-admin__content--item-date">
                        <p>22/10/23</p>
                        <span>17:51</span>
                    </div>

                    <div className="history-admin__content--item-color secondary"></div>

                    <div className="history-admin__content--item-text">
                        <p className="m-0">Orden #AHS-3040 Pendiente.</p>
                    </div>
                </div>
                <hr />
                <div className="history-admin__content--item">
                    <div className="history-admin__content--item-date">
                        <p>19/10/23</p>
                        <span>01:11</span>
                    </div>

                    <div className="history-admin__content--item-color success"></div>

                    <div className="history-admin__content--item-text">
                        <p className="m-0">Compraste exitosamente el Producto #XF-2404.</p>
                    </div>
                </div>
                <hr />
                <div className="history-admin__content--item">
                    <div className="history-admin__content--item-date">
                        <p>02/10/23</p>
                        <span>11:59</span>
                    </div>

                    <div className="history-admin__content--item-color info"></div>

                    <div className="history-admin__content--item-text">
                        <p className="m-0">Tu factura del mes de Octubre esta disponible.</p>
                    </div>
                </div>
                <hr />
                <div className="history-admin__content--item">
                    <div className="history-admin__content--item-date">
                        <p>22/09/23</p>
                        <span>10:11</span>
                    </div>

                    <div className="history-admin__content--item-color warning"></div>

                    <div className="history-admin__content--item-text">
                        <p className="m-0">El producto #XF-1983 se quedo sin stock.</p>
                    </div>
                </div>
                <hr />
                <div className="history-admin__content--item">
                    <div className="history-admin__content--item-date">
                        <p>10/09/23</p>
                        <span>12:34</span>
                    </div>

                    <div className="history-admin__content--item-color danger"></div>

                    <div className="history-admin__content--item-text">
                        <p className="m-0">Fuiste suspendido temporalmente por escribir contenido explicito.</p>
                    </div>
                </div>
                <hr />
                <div className="history-admin__content--item">
                    <div className="history-admin__content--item-date">
                        <p>01/09/23</p>
                        <span>01:01</span>
                    </div>

                    <div className="history-admin__content--item-color dark" ></div>

                    <div className="history-admin__content--item-text">
                        <p className="m-0">El producto #XF-1203 no cumple con las normas de seguridad establecias.</p>
                    </div>
                </div>

                {/* view more start */}
                <div className="history-admin__content--view-more mt-5">
                    <a href="#">
                        Ver mas
                    </a>
                </div>
                {/* view more end */}
            </div>


        </div>
    );
}

export default HistoryAdmin;
