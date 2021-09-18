import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    } from "react-router-dom"
import Detalles from '../components/Detalles'
import EditarEliminar from '../components/EditarEliminar'
import Registro from '../components/Registro'
import AppPelis from '../containers/AppPelis'
import PaginaPrincipal from '../containers/PaginaPrincipal'




export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/registrar" component={Registro}/>
                    <Route exact path="/" component={PaginaPrincipal}/>
                    <Route exact path="/portada" component={AppPelis}/>
                    <Route exact path="/detalle/:id" component={Detalles}/>
                    <Route exact path="/editar" component={EditarEliminar}/>
                </Switch>
            </Router>
        )
    }
}
