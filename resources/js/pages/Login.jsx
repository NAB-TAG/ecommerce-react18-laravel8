import { useEffect } from 'react';
import '../../css/auth/login.css'
const Login = () => {
    useEffect(()=>{
        const $header = document.querySelector('header');
        const $footer = document.querySelector('footer');

        $header.style.display = 'none';
        $footer.style.display = 'none';

    })
    return (
        <div className="login">
            <div className="container">
                <div className="login__container row">
                    <div className="col-md-6 login__container--present">
                        <div>
                            <a href="#">
                                <h2>NandoShop</h2>
                            </a>
                            <h4>Bienvenido a NandoShop</h4>
                            <p>A continuacion, debes iniciar sesion</p>
                        </div>
                    </div>
                    <div className="col-md-6 login__container--login">
                        <form action="">
                            <label htmlFor="user">Usuario:</label>
                            <input type="text" placeholder='Escribe tu usuario' id='user'/>
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" placeholder='Escribe tu contraseña' id='password'/>
                            <div className="d-flex align-items-center mt-3">
                                <input type="checkbox" id='remember'/>
                                <p className='m-0'>Recordar contraseña</p>
                            </div>

                            <button type='submit' className='btn'>Iniciar sesion</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login
