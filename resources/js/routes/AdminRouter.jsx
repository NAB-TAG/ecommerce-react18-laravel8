import { Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
import PageNotFound from "../pages/404";
import HomeAdmin from "../pages/admin/HomeAdmin";
import MyProfile from "../pages/admin/users/MyProfile";
import Settings from "../pages/admin/Settings";
import ProductsAdmin from "../pages/admin/ProductsAdmin";
import ProductAddAdmin from "../pages/admin/products/ProductAddAdmin";
import ProductEditAdmin from "../pages/admin/products/ProductEditAdmin";
import CategoriesAdmin from "../pages/admin/CategoriesAdmin";
import CategoryAddAdmin from "../pages/admin/categories/CategoryAddAdmin";
import CategoryEditAdmin from "../pages/admin/categories/CategoryEditAdmin";
import AdsAdmin from "../pages/admin/AdsAdmin";
import AdsAddAdmin from "../pages/admin/ads/AdsAddAdmin";
import AdEditAdmin from "../pages/admin/ads/AdEditAdmin";

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
                {/* Categories */}
                <Route path="/categories" element={ <CategoriesAdmin /> } />
                <Route path="/category/edit/*" element={ <CategoryEditAdmin /> } />
                <Route path="/categories/*" element={ <CategoriesAdmin /> } />
                <Route path="/category/add" element={ <CategoryAddAdmin /> } />
                {/* Ads */}
                <Route path="/ads" element={ <AdsAdmin /> } />
                <Route path="/ad/edit/*" element={ <AdEditAdmin /> } />
                <Route path="/ads/add" element={ <AdsAddAdmin /> } />
                <Route path="/settings" element={ <Settings /> } />
                <Route path="/*" element={ <PageNotFound /> }/>
                {/* User */}
                <Route path="/myprofile" element={ <MyProfile /> } />
            </Routes>

    )

}

export default AdminRouter
