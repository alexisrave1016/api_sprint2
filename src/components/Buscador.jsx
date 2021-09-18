import React, { Component } from 'react'
import Cookies from 'universal-cookie/es6'
import { Link } from 'react-router-dom'

const cookies = new Cookies()

function Buscador({busqueda, animes, modAnimes}) {    

       const CerrarSesion = async ()=>{
        cookies.remove('id',  {path: "/"})
        cookies.remove('username',  {path: "/"})
        cookies.remove('nombre',  {path: "/"})
        cookies.remove('apellido_paterno',  {path: "/"})
        cookies.remove('apellido_materno',  {path: "/"})
        window.location.href = "./";
    }

    const handleSubmit = async (e) =>{
      e.preventDefault()
    }

    const handleChange = (e) =>{
       busqueda(e.target.value);
        filtrar(e.target.value)
       // console.log("busqueda: "+ animes);
    }

    const filtrar = (terminoBusqueda)=>{
        let resultadoBusqueda = animes.filter(elem=>{
            if(elem.titulo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elem
            }
        })
        modAnimes(resultadoBusqueda)
      }

      const clickSubmitTop= ()=>{
          let resultadoBusqueda = animes.filter(elemt=>{
              if(elemt.calificaciion > 7.5){
                  return elemt
              }
          })
          modAnimes(resultadoBusqueda)
      }

      const clickSubmitUp= ()=>{
        let resultadoBusqueda = animes.filter(elemt =>{
            if(elemt.calificaciion <= 7.5){
                return elemt
            }
        })
        modAnimes(resultadoBusqueda)
    }
     

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light  navbar-expand-sm bg-black">
                    <div className="container-fluid">
                        <p className="navbar-brand" href="#"><img src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1630871290/api_sprint2/logo_vlh6uj.png" width="65px" alt="no disponible"/></p>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                                    <li className="nav-item">
                                    <p className="nav-link active text-white h5" aria-current="page" href="#">Todas</p>
                                    </li>
                                    <li className="nav-item">
                                    <div className="nav-link text-white h5 btn"  onClick={()=>clickSubmitTop()}>Mas valoradas</div>
                                    </li>
                                    <li className="nav-item">
                                    <div className="nav-link  text-white h5 btn"  onClick={()=>clickSubmitUp()}>Menos valoradas</div>
                                    </li>
                        

                
                            </ul>
                                <form onSubmit={handleSubmit} className="d-flex">
                                    <input className="form-control " width="300px" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}/>
                                    <button className="btn btn-outline-success bg-warning" type="submit"><i class="fas fa-search" ></i></button>
                                </form>
                                <div className="nav-item dropdown">
                                    <buttom className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">{cookies.get('nombre')}</buttom>
                                    <ul className="dropdown-menu">
                                               <Link to='/editar'> <li><a className="dropdown-item" href="#scrollspyHeading3">configuracion</a></li> </Link>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><button className="dropdown-item" onClick={()=>CerrarSesion()}>Cerrar Sesion</button></li>
                                    </ul>
                                </div>
                        </div>
                    </div>
               </nav>
            </div>
        )
    
}

export default Buscador;
