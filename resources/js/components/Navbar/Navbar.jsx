import TopNavbar from "./top/TopNavbar";
import '../../../css/navbar/navbar.css'
import Search from "./search/Search";
import CategoriesNavbar from "./categories/CategoriesNavbar";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <>
            <header className="navbar p-0" id="navbar">

                    <TopNavbar />
                    <div className="d-flex col-md-12 container align-items-center my-4 d-flex">

                        {/* <CategoriesNavbar /> */}
                        <Logo />
                        <nav className="navbar__search align-items-start col-md-9">
                            <Search className="navbar__search--search" cart={ true }/>
                        </nav>
                    </div>
                    <Search className="container navbar__search--mobile" cart={ false }/>
            </header>
        </>
    );
}

export default Navbar
