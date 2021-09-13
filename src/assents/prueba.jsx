//export default class AppPelis extends Componen{
//     constructor(){
//         super()
//         this.state={

//             peli: [],
//             searchTerm:''
//          }
//         }
//     async componentDidMount(){
//         const res = await fetch(url);
//         const data = await res.json()
//         this.setState({peli:data})
//         // console.log(data)

      //   if(!cookies.get('username')){
           
      //       alert("debes inicair sesion")
      //       window.location.href="./";
            
//         }
       
//     }

   //     render() {


//         return (
//             <div className="bg-black container">
//             <Buscador />
            
//             <Carrucel />

//             <div className="container row row-cols-1 row-cols-md-5 g-4 py5 md-auto">
//             {
//                 this.state.peli.map((movie, index)=>{
//                     return(
//                         <Cards 
//                             key={`${movie}-${index}`}
//                             anime= {movie}
//                         />
//                     )
//                 })
//             }
            
                
//             </div>
//             </div>
//         )
//     }
// }
//////////////////////////

// import React, { Component } from 'react'
// import Cookies from 'universal-cookie/es6'
// // import axios from 'axios';
// // import { useEffect, useState } from 'react';
// //  AppPelis from '../containers/AppPelis'
// const cookies = new Cookies();
// export default class Buscador extends Component {
  

    
//         cerrarSesion=()=>{
//         cookies.remove('id', {path:"/"});
//         cookies.remove('apellido_paterno', {path:"/"});
//         cookies.remove('apellido_materno', {path:"/"});
//         cookies.remove('nombre', {path:"/"});
//         cookies.remove('username', {path:"/"});
//         window.location.href='./';
//     }
   

//         render() {
                
                
     
//         return (
            
//             <div>
//                 <nav className="navbar navbar-expand-lg navbar-light  navbar-expand-sm bg-black">
//                     <div className="container-fluid">
//                         <p className="navbar-brand" href="#"><img src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1630871290/api_sprint2/logo_vlh6uj.png" width="65px" alt="no disponible"/></p>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
//                                     <li className="nav-item">
//                                     <p className="nav-link active text-white h5" aria-current="page" href="#">Todas</p>
//                                     </li>
//                                     <li className="nav-item">
//                                     <p className="nav-link text-white h5" href="#">Mas valoradas</p>
//                                     </li>
//                                     <li className="nav-item">
//                                     <p className="nav-link disabled text-white h5" href="#" tabindex="-1" aria-disabled="true">Menos valoradas</p>
//                                     </li>
//                                    {/* <li>{primer_apellido}</li> */}

                                  
//                             </ul>
//                                 <form className="d-flex">
//                                     <input className="form-control " width="300px" type="search" placeholder="Search" aria-label="Search" />
//                                     <button className="btn btn-outline-success bg-warning" type="submit"><i class="fas fa-search" ></i></button>
//                                 </form>
//                                 <div className="nav-item dropdown">
//                                     <buttom className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">{cookies.get('nombre')}</buttom>
//                                     <ul className="dropdown-menu">
//                                     <li><a className="dropdown-item" href="#scrollspyHeading3">configuracion</a></li>
//                                     <li><hr className="dropdown-divider"/></li>
//                                     <li><button className="dropdown-item" onClick={()=>this.cerrarSesion()}>Cerrar Sesion</button></li>
//                                     </ul>
//                                 </div>
//                         </div>
//                     </div>
//                </nav>
           
//             </div>
//         )

//     }
// }

///////////

// import React, { Component } from 'react'
// import Cookies from 'universal-cookie/es6'

// const cookies = new Cookies()

// function Nave({busqueda, animes, modAnimes}) {    

//        const cerrarSesion = async ()=>{
//         cookies.remove('id',  {path: "/"})
//         cookies.remove('username',  {path: "/"})
//         cookies.remove('nombre',  {path: "/"})
//         cookies.remove('apellido_paterno',  {path: "/"})
//         cookies.remove('apellido_materno',  {path: "/"})
//         window.location.href = "./";
//     }

//     const handleSubmit = async (e) =>{
//       e.preventDefault()
//     }

//     const handleChange = (e) =>{
//        busqueda(e.target.value);
//         filtrar(e.target.value)
//        // console.log("busqueda: "+ animes);
//     }

//     const filtrar = (terminoBusqueda)=>{
//         let resultadoBusqueda = animes.filter(elem=>{
//             if(elem.titulo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
//                 return elem
//             }
//         })
//         modAnimes(resultadoBusqueda)
//       }
     

//         return (
//             <div>
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                     <div className="container-fluid">
//                         <p className="navbar-brand" >Meflix</p>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                             <p className="nav-link active" aria-current="page" href="#">Home</p>
//                             </li>
//                             <li className="nav-item">
//                             <p className="nav-link" >Link</p>
//                             </li>
//                             <li className="nav-item dropdown">
//                             </li>
                          
//                         </ul>
//                         <form onSubmit={handleSubmit} className="d-flex">
//                             <input className="form-control inputBuscar me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}/>
//                             <button className="btn btn-outline-success" type="submit">Search</button>
                            
//                         </form>
//                                 <div className="nav-item dropdown m-1">
//                                     <p className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Usuario</p>
//                                     <ul className="dropdown-menu">
//                                     <li><a className="dropdown-item" href="#scrollspyHeading3">configuracion</a></li>
//                                     <li><hr className="dropdown-divider"/></li>
//                                     <li><button className="dropdown-item" onClick={()=>cerrarSesion()}>Cerrar Sesion</button></li>
//                                     </ul>
//                                 </div>
//                         </div>
//                     </div>
//                     </nav>
//             </div>
//         )
    
// }

// export default Nave;
////////


// import  {useEffect, useState} from "react";
// import Nave from '../components/Nave'
// import axios from "axios";
// import Cookies from "universal-cookie/es6";
// import Card from "../components/Card";

// const  url = "https://api-pelis.herokuapp.com/animes"
// const cookies = new Cookies()

// function AppPortada() {

    

//     const [animes, setAnimes] = useState([]);
//     const [dataAnime, setDataAnime] = useState([]);
//     const [busqueda, setBusqueda] = useState('');

//     const peticionGet = async()=>{
//       await axios.get(url)
//       .then(res=>{
//           console.log(res.data)
//           setAnimes(res.data)
//           setDataAnime(res.data)
        
//       }).catch(error=>{
//           console.log(error)
//       })

//     }

   

//     useEffect(() => {
//         peticionGet();
//         if(!cookies.get('username')){
//             alert("debe acceder con usuario primero")
//             window.location.href = "./";
//             }

            
//     }, []);

 



//     return ( 
//     <div> 
//         <Nave busqueda={setBusqueda} animes={dataAnime} modAnimes={setAnimes}/> 
//         <div className="container row row-cols-1 row-cols-md-5 g-4 py5 md-auto">
//         {animes && 
//         animes.map(elem =>(
//             <Card key={elem.titulo} datos={elem}/>
//             ))}
//         </div>
//     </div>
//     );
// }

// export default AppPortada;