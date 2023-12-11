import Hero from "../components/Heros/Hero";
import CategoriesNavbar from "../components/Navbar/categories/CategoriesNavbar";
import Products from "../components/Products/Products";


function Home(){
    console.log("perro")
    return (
        <div className="container">
            <div className="row">
                <CategoriesNavbar />

                <Hero />
                {/* <Products /> */}
            </div>
        </div>
    );
}
export default Home
