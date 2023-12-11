import { redirect } from 'react-router-dom';
import Swal from 'sweetalert2';

class SweetAlert{
    constructor(){

    }

    /**
     * Devuelve el texto seleccionado.
     * @param {string} title - El titulo del mensaje.
     * @param {string} text - El texto del mensaje.
     * @param {string} icon - El icono del mensaje pueden ser ( success, info, danger, warning, question ).
     * @param {string} confirmButtonText - El texto del boton.
     * @returns {string} El texto seleccionado.
   */

    normal(title, text, icon, confirmButtonText){
        Swal.fire({ title, text, icon, confirmButtonText });
    }

    confirmationFetch( title, text, icon, fetch, after = () => {} ){
        Swal.fire({
            title,
            text,
            showCancelButton: true,
            icon,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Aceptar',
            showLoaderOnConfirm: true,
            preConfirm: () => fetch(),
            allowOutsideClick: () => !Swal.isLoading()
            })
            .then((result) => {
                if (result.isConfirmed) {
                    this.normal(result.value[0], result.value[2], result.value[1], "Aceptar");
                    after();

                }
            })
    }
}


export default SweetAlert
