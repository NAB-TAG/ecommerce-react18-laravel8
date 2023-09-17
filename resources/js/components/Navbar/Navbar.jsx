import TopNavbar from "./top/TopNavbar";
import '../../../css/navbar/navbar.css'
import Search from "./search/Search";
import CategoriesNavbar from "./categories/CategoriesNavbar";

const Navbar = () => {
    return (
        <>
            <header className="navbar p-0">

                    <TopNavbar />
                    <nav className="container navbar__search align-items-start">
                        <CategoriesNavbar />
                        <Search />
                    </nav>
            </header>
        </>
    );
}

export default Navbar
