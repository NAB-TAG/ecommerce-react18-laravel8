class DomFormater{
    constructor(){

    }

    delete($id){
        let element = document.getElementById($id);
        element.remove();
    }
}
export default DomFormater
