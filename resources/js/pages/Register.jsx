import '../../css/auth/register.css'
import { useEffect } from 'react';
import Slider from '../helpers/Slider.class';

const slider = new Slider('form__box');
const Register = () => {

    useEffect(()=>{
        const $header = document.querySelector('header');
        const $footer = document.querySelector('footer');

        $header.style.display = 'none';
        $footer.style.display = 'none';

    })


    const nextHandle = (e) => {
        e.preventDefault();
        slider.moveRight();

        let step = document.getElementById(`register-step-${slider.actualSlider()}`);
        let $buttonPrev = document.getElementById('btn-prev');

        step.classList.add('active')
        $buttonPrev.classList.remove('disabled')

        if (slider.actualSlider() == 2) {
            let $buttonNext = document.getElementById('btn-next');
            let $buttonRegister = document.getElementById('btn-register')

            $buttonNext.classList.add('disabled')
            $buttonRegister.classList.remove('d-none')
        }
    }

    const prevHandle = (e) => {
        e.preventDefault();
        slider.moveLeft();
        let $buttonNext = document.getElementById('btn-next');
        let step = document.getElementById(`register-step-${slider.actualSlider() + 1}`);
        let $buttonRegister = document.getElementById('btn-register')

        step.classList.remove('active')
        $buttonNext.classList.remove('disabled')
        $buttonRegister.classList.add('d-none')

        if (slider.actualSlider() == 0) {
            let $buttonPrev = document.getElementById('btn-prev');
            $buttonPrev.classList.add('disabled')
        }
    }

    return (
        <div className="register">
            <div className="container">
                <div className="register__container row">
                    <div className="col-md-6 register__container--present">
                        <div>
                            <a href="#">
                                <h2>NandoShop</h2>
                            </a>
                            <h4>Bienvenido a NandoShop</h4>
                            <p>A continuacion, debes crear una cuenta</p>
                        </div>
                    </div>
                    <div className="col-md-6 register__container--register">
                        <div className="register__steps">
                            <div className="register__steps--number" id='register-step-1'>
                                <p className='m-0'>Paso 1</p>
                            </div>

                            <div className="register__steps--number" id='register-step-2'>
                                <p className='m-0'>Paso 2</p>
                            </div>

                            <div className="register__steps--number" id='register-step-3'>
                                <p className='m-0'>Paso 3</p>
                            </div>


                        </div>

                        <form action="">
                            <div className="d-flex form">
                                <div className='form__box m-auto' id='form-box-1'>

                                    <label htmlFor="name">Usuario:</label>
                                    <input type="text" placeholder='Escribe un usuario' id='name'/>
                                    <label htmlFor="email">Correo Electronico:</label>
                                    <input type="email" placeholder='Escribe tu contraseña' id='email'/>
                                </div>

                                <div className='form__box m-auto' id='form-box-2'>
                                    <label htmlFor="code">Codigo de verificacion:</label>
                                    <input type="text" placeholder='Escribe el codigo' id='code'/>
                                </div>

                                <div className='form__box m-auto' id='form-box-3'>

                                    <label htmlFor="user">Usuario:</label>
                                    <input type="text" placeholder='Escribe un usuario' id='user'/>
                                    <label htmlFor="password">Contraseña:</label>
                                    <input type="password" placeholder='Escribe una contraseña' id='password'/>
                                    <label htmlFor="cpassword">Confirmar contraseña:</label>
                                    <input type="password" placeholder='Confirma tu contrseña' id='cpassword'/>
                                </div>
                                {/* <div className="d-flex align-items-center mt-3">
                                    <input type="checkbox" id='remember'/>
                                    <p className='m-0'>Recordar contraseña</p>
                                </div> */}
                            </div>
                            <div className="d-flex justify-content-between">
                                <button className='btn btn-down disabled' onClick={ (e) => prevHandle(e) } id='btn-prev'>Atras</button>
                                <button className='btn btn-up' onClick={ (e) => nextHandle(e) } id='btn-next'>Siguiente</button>

                            </div>
                            <button type='submit' className='btn d-none' id='btn-register'>Registrarse</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register
