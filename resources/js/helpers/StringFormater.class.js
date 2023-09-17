/**
 * Clase para Formatear cadenas de textos.
 * @class
 */
class StringFormater
{
    constructor( text ){
        this.text = text;
    }

    /**
     * Devuelve el texto seleccionado.
     * @param {number} start - Desde donde empieza a seleccionar.
     * @param {number} end - Hasta donde termina de seleccionar.
     * @returns {string} El texto seleccionado.
   */
    constrainer( start, end ){

        // Comprobar si el texto es mas largo de lo requerido
        const QUANTITY_TEXT = end - start;
        let result = this.text;

        if ( this.text.length > QUANTITY_TEXT ) {
            // Cortar el texto
            result = this.text.slice( start, end );
            result = result + "...";
        }


        return result;
    }

    /**
   * Suma dos números.
   * @param {number} a - El primer número.
   * @param {number} b - El segundo número.
   * @returns {number} La suma de los dos números.
   */
    sumar(a, b) {
        return a + b;
      }
}

export default StringFormater
