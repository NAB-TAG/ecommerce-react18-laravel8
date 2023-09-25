import Hero from "../components/Heros/Hero";
import CategoriesNavbar from "../components/Navbar/categories/CategoriesNavbar";

function Home(){
    return (
        <div className="container">
            <div className="row">
                <CategoriesNavbar />

                <Hero />
            </div>
        </div>
    );
}
export default Home
