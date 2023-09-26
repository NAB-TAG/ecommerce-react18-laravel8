import { Routes, Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/404";

function MainRouter(){
    return(
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/home" element={ <Home /> }/>
            <Route path="/*" element={ <PageNotFound /> }/>

        </Routes>
    )

}

export default MainRouter
