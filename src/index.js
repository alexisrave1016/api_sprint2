import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js';
import './style/main.css'
import './style/card.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'
import EditarEliminar from './components/EditarEliminar.jsx';




ReactDOM.render(
    <AppRouter />,
    document.getElementById('root')
);

