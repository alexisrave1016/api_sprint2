import React, { Component } from 'react'

export default class Buscador extends Component {
    render() {
        return (
            <div>
                <nav className="navbar text-dark navbar-expand-lg navbar-light bg-light ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1630871290/api_sprint2/logo_vlh6uj.png" width="65px"/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                                    <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Todas</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Mas valoradas</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Menos valoradas</a>
                                    </li>
                            </ul>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                        </div>
                    </div>
               </nav>
            </div>
        )
    }
}
