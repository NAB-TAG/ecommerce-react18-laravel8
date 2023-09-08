import Navbar from "./Navbar/Navbar";

// Importar estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importar iconos de fontawesome
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>
        </>
    );
}

export default App;

