import Navbar from "./Navbar/Navbar";

// Importar estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importar iconos de fontawesome
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter } from "react-router-dom";
import '../../css/app.css';

// importar el router principal
import MainRouter from '../routes/MainRouter'
import Sidebar from "../pages/Sidebar";
function App() {
    return (
        <>
            <BrowserRouter>
                <Sidebar />
                <Navbar/>
                <MainRouter />
            </BrowserRouter>
        </>
    );
}

export default App;

