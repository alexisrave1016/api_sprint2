import React, { Component } from 'react'
import Cookies from 'universal-cookie/es6'
//  AppPelis from '../containers/AppPelis'
const cookies = new Cookies();
export default class Buscador extends Component {
  

    
        cerrarSesion=()=>{
        cookies.remove('id', {path:"/"});
        cookies.remove('apellido_paterno', {path:"/"});
        cookies.remove('apellido_materno', {path:"/"});
        cookies.remove('nombre', {path:"/"});
        cookies.remove('username', {path:"/"});
        window.location.href='./';
    }
   

        render() {
     
        return (
            
            <div>
                <nav className="navbar navbar-expand-lg navbar-light  navbar-expand-sm bg-black">
                    <div className="container-fluid">
                        <p className="navbar-brand" href="#"><img src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1630871290/api_sprint2/logo_vlh6uj.png" width="65px" /></p>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                                    <li className="nav-item">
                                    <p className="nav-link active text-white h5" aria-current="page" href="#">Todas</p>
                                    </li>
                                    <li className="nav-item">
                                    <p className="nav-link text-white h5" href="#">Mas valoradas</p>
                                    </li>
                                    <li className="nav-item">
                                    <p className="nav-link disabled text-white h5" href="#" tabindex="-1" aria-disabled="true">Menos valoradas</p>
                                    </li>
                                   {/* <li>{primer_apellido}</li> */}

                                  
                            </ul>
                                <form className="d-flex">
                                    <input className="form-control " width="300px" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success bg-warning" type="submit"><i class="fas fa-search" ></i></button>
                                </form>
                                <div className="nav-item dropdown">
                                    <buttom className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">{cookies.get('nombre')}</buttom>
                                    <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#scrollspyHeading3">configuracion</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><button className="dropdown-item" onClick={()=>this.cerrarSesion()}>Cerrar Sesion</button></li>
                                    </ul>
                                </div>
                        </div>
                    </div>
               </nav>
               {/* <li>
                <a>{duracion}</a>
             </li>   */}
            </div>
        )
    }
}
