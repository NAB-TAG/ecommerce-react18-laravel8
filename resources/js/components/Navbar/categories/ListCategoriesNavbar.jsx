import { Link } from "react-router-dom";
import StringFormater from '../../../helpers/StringFormater.class'
const LIST_CATEGORIES = [
    { id: 1, icon: "fas fa-home", name: "Ropa mujer" },
    { id: 2, icon: "fas fa-home", name: "Ropa hombre" },
    { id: 3, icon: "fas fa-home", name: "Hogar, mascotas y electrodomesticos" },
    { id: 4, icon: "fas fa-home", name: "informatica, oficina y seguridad" },
    { id: 5, icon: "fas fa-home", name: "Telefonia y comunicaciones" },
];

const ListCategoriesNavbar = () => {

    return (
        LIST_CATEGORIES.map(( category ) => {
            // Corto el texto para que no se alargue tanto
            let name = new StringFormater( category.name );
            name = name.constrainer(0, 25);

            return (
                <div key={ category.id } className="navbar__search--category">
                    <Link to={ `/category/${ category.id }` }>
                        <i className={ category.icon }></i>
                        { name }
                    </Link>
                </div>
            )
        })
    );
}

export default ListCategoriesNavbar;
