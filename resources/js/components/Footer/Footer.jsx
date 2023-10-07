import '../../../css/footer.css'

const Footer = () => {
    return(
        <footer >
            <div className="">

                <div className="footer__header container">
                    <div className="d-flex justify-content-between w-100 m-auto">

                        <a href="#">
                            <h2>NandoShop</h2>
                        </a>
                        <div className="footer__header--logos">
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="footer__header--right-label"><div></div></div>
                    <div className="footer__header--left-label"><div></div></div>
                </div>
                    <hr />
                <div className="footer__links w-100 container">
                    <div className="row">

                        <ul className="col-md-3">
                            <h5>Secciones</h5>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Productos</a></li>
                            <li><a href="#">Categorias</a></li>
                            <li><a href="#">Mi cuenta</a></li>
                            <li><a href="#">Carrito de compras</a></li>
                        </ul>
                        <ul className="col-md-3">
                            <h5>Politicas</h5>
                            <li><a href="#">Historial de Pedidos</a></li>
                            <li><a href="#">Política de Devoluciones</a></li>
                            <li><a href="#">Política de Privacidad</a></li>
                            <li><a href="#">Términos y Condiciones</a></li>
                        </ul>
                        <ul className="col-md-3">
                            <h5>Ayuda</h5>
                            <li><a href="#">Preguntas Frecuentes</a></li>
                            <li><a href="#">Contáctenos</a></li>
                            <li><a href="#">Acerca de Nosotros</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Redes Sociales</a></li>
                        </ul>
                        <ul className="col-md-3">
                            <h5>Registra tu email para recibir novedades y cupones gratis</h5>
                            <form action="">
                                <input type="email" placeholder='Ingresa tu emal'/>
                                <input type="submit" />
                            </form>
                        </ul>
                    </div>
                </div>

                <div className="footer__footer container">
                   <p>Copyright 2023 Nandoshop. Todos los derechos reservados</p>
                </div>

            </div>
        </footer>
    );
}

export default Footer
