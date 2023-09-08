import TopNavbar from "./top/TopNavbar";
import '../../../css/navbar/navbar.css'
import { Route } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <header className="navbar p-0">

                    <TopNavbar />
                    <nav className="container">

                    </nav>
            </header>
        </>
    );
}

export default Navbar
