import { Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
import PageNotFound from "../pages/404";
import HomeAdmin from "../pages/admin/HomeAdmin";
import MyProfile from "../pages/admin/MyProfile";
import Settings from "../pages/admin/Settings";
import ProductsAdmin from "../pages/admin/ProductsAdmin";
import ProductAddAdmin from "../pages/admin/products/ProductAddAdmin";
import ProductEditAdmin from "../pages/admin/products/ProductEditAdmin";

function AdminRouter(){
    return(


            <Routes>
                <Route path="/" element={ <HomeAdmin /> } />
                <Route path="/my_profile" element={ <MyProfile /> } />
                {/* Products */}
                <Route path="/products" element={ <ProductsAdmin /> } />
                <Route path="/product/edit/*" element={ <ProductEditAdmin /> } />
                <Route path="/products/*" element={ <ProductsAdmin /> } />
                <Route path="/product/add" element={ <ProductAddAdmin /> } />
                <Route path="/settings" element={ <Settings /> } />
                <Route path="/*" element={ <PageNotFound /> }/>

            </Routes>

    )

}

export default AdminRouter
