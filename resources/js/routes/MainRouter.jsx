import { Routes, Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/404";
import ProductDetail from "../pages/ProductDetail";
import Login from "../pages/login";
import Register from "../pages/Register";
import Prueba from "../components/Prueba";
import Admin from "../pages/Admin";

function MainRouter(){
    return(
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/home" element={ <Home /> }/>
            <Route path="/*" element={ <PageNotFound /> }/>
            <Route path="/detail/*" element={ <ProductDetail /> }/>
            <Route path="/login" element={ <Login /> }/>
            <Route path="/register" element={ <Register /> }/>
            <Route path="/test" element={ <Prueba /> }/>
            <Route path="/admin/*" element={ <Admin /> }/>

        </Routes>
    )

}

export default MainRouter
