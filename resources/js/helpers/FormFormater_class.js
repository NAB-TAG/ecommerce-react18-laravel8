class FormFormater {
    constructor( data ){
        this.data = data;
    }

    /**
     * Convierte un objecto en un formData.
     * @param {array} arrayJson - Que valores quieres convertir a JSON.
     * @param {array} arrayImage - Que valores quieres pasar como imagen ( util solo cuando existes un input de tipo "file" con atributo multiple ).
     * @returns {formData} Un formData listo para mandar.
   */
    parser(arrayJson, arrayImage){
        let formData = new FormData();

        Object.keys(this.data).forEach((key) => {
            const value = this.data[key];

                if(arrayJson.includes(key)){

                    // let jsonValue = JSON.stringify(value)
                    formData.append(key, JSON.stringify(value));
                } else if(arrayImage.includes(key)){
                    for (let i = 0; i < value.length; i++) {
                        formData.append(`${ key }[]`, value[i]);

                    }
                }
                else{
                    formData.append(key, value)
                }



        });
        return formData;
    }
}

export default FormFormater
