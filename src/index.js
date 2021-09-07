import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js';
import './style/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/card.css'
import 'bootstrap/dist/js/bootstrap.min.js'




ReactDOM.render(
    <AppRouter />,
    document.getElementById('root')
);

