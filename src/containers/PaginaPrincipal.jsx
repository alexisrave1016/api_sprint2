import React, { Component } from 'react'
import Login from '../components/Login'
// import Registro from '../components/Registro'

export default class PaginaPrincipal extends Component {
    render() {
        return (
            <div className="bg-black vh-100">
                <Login />
            </div>
        )
    }
}
