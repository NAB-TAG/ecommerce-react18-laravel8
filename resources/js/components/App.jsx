import React from 'react';
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2';

function App() {
    const mostrarSweetAlert = () => {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
      };

      return (
        <div>
          <button onClick={mostrarSweetAlert}>Mostrar SweetAlert</button>
        </div>
      );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
