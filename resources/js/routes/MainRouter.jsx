import { Routes, Router, Route } from "react-router-dom";
import Home from "../pages/Home";

function MainRouter(){
    return(
        <Routes>
            <Route path="/" element={ <Home /> }/>
        </Routes>
    )

}

export default MainRouter
