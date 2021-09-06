import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js';
import './style/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/card.css'




ReactDOM.render(
    <AppRouter />,
    document.getElementById('root')
);

