import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './composition/App';
import STORE from './composition/store';


ReactDOM.render(<App store={STORE}/>, document.getElementById('root'));


