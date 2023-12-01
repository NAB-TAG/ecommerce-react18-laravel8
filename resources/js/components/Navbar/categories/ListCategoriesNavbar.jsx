import { Link } from "react-router-dom";
import StringFormater from '../../../helpers/StringFormater.class'
import { useEffect, useState } from "react";
import { GetFetch } from "../../../hooks/Fetch.hook";
import CategoriesSkeletons from "../../Skeletons/CategoriesSkeletons/CategoriesSkeletons";
const LIST_CATEGORIES = [
    { id: 1, icon: "fas fa-home", name: "Ropa mujer" },
    { id: 2, icon: "fas fa-home", name: "Ropa hombre" },
    { id: 3, icon: "fas fa-home", name: "Hogar, mascotas y electrodomesticos" },
    { id: 4, icon: "fas fa-home", name: "informatica, oficina y seguridad" },
    { id: 5, icon: "fas fa-home", name: "Telefonia y comunicaciones" },
    { id: 6, icon: "fas fa-home", name: "Automoviles y automotor" },

];

const ListCategoriesNavbar = () => {
    const [ categories, setCategories ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true)
                const getCategories = await GetFetch('/api/categories', {'Content-Type': 'application/json'});

                setCategories(getCategories.data);
                setLoading(false);
                // setLinks(getCategories.links);

            } catch (error) {
                console.log(error)
            }
        }
        fetchData();

    }, [])

    return (
        <>
        {loading ?
        <CategoriesSkeletons quantity={7}/>
        :
        // <CategoriesSkeletons quantity={10}/>
        categories.map(( category ) => {
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
        }
        </>
    );
}

export default ListCategoriesNavbar;
