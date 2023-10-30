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
import Footer from "../components/Footer/Footer"
import { Provider } from "react-redux";
import { store } from "../store";

function App() {
    return (
        <>
            <Provider store={ store }>
            <BrowserRouter>
                <Sidebar />
                <Navbar/>
                <MainRouter />
                <Footer />
            </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;

