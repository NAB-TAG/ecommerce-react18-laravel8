import { Link } from "react-router-dom";
import { desactiveClass } from "../hooks/ClassSwitch.hook";
import StringFormater from "../helpers/StringFormater.class";
const LIST_CATEGORIES = [
    { id: 1, icon: "fas fa-home", name: "Ropa mujer" },
    { id: 2, icon: "fas fa-home", name: "Ropa hombre" },
    { id: 3, icon: "fas fa-home", name: "Hogar, mascotas y electrodomesticos " },
    { id: 4, icon: "fas fa-home", name: "informatica, oficina y seguridad" },
    { id: 5, icon: "fas fa-home", name: "Telefonia y comunicaciones" },
];
const Sidebar = () => {
    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar__header">

                <h3><a href="/">Nandoshop</a></h3>
                <button className="btn" onClick={ () => desactiveClass( 'sidebar' ) }><i className="fas fa-close"></i></button>
            </div>

            <div className="sidebar__content">
                <div className="sidebar__content--title">
                    <h5>Categorias</h5>
                </div>
                <ul className="sidebar__content--lists">
                    { LIST_CATEGORIES.map(( category ) => {
                        return (
                            <Link to={ `/category/${ category.id }` } key={ category.id }>

                                <li>{ new StringFormater(category.name).constrainer(0,25) }</li>
                            </Link>
                        );
                    })}


                </ul>
            </div>
        </div>
    );
}



export default Sidebar
