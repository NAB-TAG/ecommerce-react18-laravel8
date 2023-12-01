class DomFormater{
    constructor(){

    }

    delete($id){
        let element = document.getElementById($id);
    if(element !== null){
        // Verifica si el elemento es un hijo antes de intentar eliminarlo
        element.style.display = 'none';
    }
    }
}
export default DomFormater
