// ## Renderiza una barra de navegacion superior
import Dropdown from "../../Dropdowns/Dropdown";
import { VENDE_EN_NANDOSHOP, MI_CUENTA, AYUDA } from "../Navbar.data";

function TopNavbar(){
    return(
        <div className="navbar__top w-100 bg-light justify-content-end d-flex p-1">
            <Dropdown text="Vende en Nandoshop" items={ VENDE_EN_NANDOSHOP } />
            <Dropdown text="Ayuda" items={ AYUDA } />
            <a href="#">
                <button className="navbar__drop-btn bg-light">Lista de favoritos</button>
            </a>
            <Dropdown text="Mi cuenta" items={ MI_CUENTA } />
        </div>
    );
}

export default TopNavbar
