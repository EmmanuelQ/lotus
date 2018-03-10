import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/mapbox-gl/dist/mapbox-gl.css';
import App from './Views/Home/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
