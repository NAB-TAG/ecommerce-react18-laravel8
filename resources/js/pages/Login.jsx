import { useEffect } from 'react';
import '../../css/auth/login.css'
import FormMaster from '../components/Forms/FormMaster'
import { Field } from 'formik';
import FormFormater from '../helpers/FormFormater_class';
import SweetAlert from '../helpers/Alerts/SweetAlert2_class';
import { PostFetch } from '../hooks/Fetch.hook';
const Login = () => {
    const alert = new SweetAlert();

    useEffect(()=>{
        const $header = document.querySelector('header');
        const $footer = document.querySelector('footer');

        $header.style.display = 'none';
        $footer.style.display = 'none';

    })
    const after = () => {
        alert("s")
    }
    const handleSubmit = (values) => {
        let formData = new FormFormater(values).parser([], []);
        alert.confirmationFetch(
            'Estas seguro?',
            'Estas Seguro de iniciar sesion?',
            'question',
            () => PostFetch( '/api/user/login', formData),
            () => window.location.href = '/');
    }


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
                        {/* <form action=""> */}
                            <FormMaster onSubmit={handleSubmit} initialValues={{}}>
                                <label htmlFor="user">Email:</label>
                                <Field name="email" type="text" placeholder="Escribe tu usuario" id="email-login" />
                                <Field name="_token" type="hidden" value="a"/>
                                <label htmlFor="password">Contraseña</label>
                                <Field name="password" type="password" placeholder="Escribe tu contraseña" id="password-login" />
                                <button type='submit' className='btn'>Iniciar sesion</button>
                            </FormMaster>
                            {/* <form action="" mt>
                            <label htmlFor="user">Email:</label>
                                <input name="email" type="text" placeholder="Escribe tu usuario" id="email-login" />
                                <input name="_token" type="hidden" value="a"/>
                                <label htmlFor="password">Contraseña</label>
                                <input name="password" type="password" placeholder="Escribe tu contraseña" id="password-login" />
                                <button type='submit' className='btn'>Iniciar sesion</button>
                            </form> */}
                            {/* <input type="text" placeholder='Escribe tu usuario' id='user'/>
                            <input type="password" placeholder='Escribe tu contraseña' id='password'/>
                            <div className="d-flex align-items-center mt-3">
                                <input type="checkbox" id='remember'/>
                                <p className='m-0'>Recordar contraseña</p>
                            </div> */}

                        {/* </form> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login
