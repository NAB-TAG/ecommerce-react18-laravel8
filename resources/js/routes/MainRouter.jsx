import { Routes, Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/404";
import ProductDetail from "../pages/ProductDetail";

function MainRouter(){
    return(
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/home" element={ <Home /> }/>
            <Route path="/*" element={ <PageNotFound /> }/>
            <Route path="/detail/*" element={ <ProductDetail /> }/>

        </Routes>
    )

}

export default MainRouter
