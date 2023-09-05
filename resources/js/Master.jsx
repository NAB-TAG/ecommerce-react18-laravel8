import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

function Master() {
    return <App />
}

export default Master;

if (document.getElementById('root')) {
    ReactDOM.render(<Master />, document.getElementById('root'));
}
