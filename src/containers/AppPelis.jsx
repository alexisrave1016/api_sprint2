// import React, { Component } from 'react'
import Buscador from '../components/Buscador'
import Cards from '../components/Cards'
import axios from 'axios'
import { useState, useEffect} from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import Cookies from 'universal-cookie/es6'


import Carrucel from '../components/Carrucel'
import ModalApp from '../components/Detalles'
const url ="https://api-alexisrave-anime.herokuapp.com/animes"

const cookies = new Cookies()

function AppPelis(){
    const [animes, setAnimes] = useState([]);
    const [dataAnime, setDataAnime]= useState([]);
    const [buscador, setBuscador] = useState('');

    const peticionesGet=async()=>{
        await axios.get(url)
        .then(res =>{
            setAnimes(res.data);
            setDataAnime(res.data);
        }).catch(error=>{
            console.log(error);
        })
    }
    
    
    useEffect(() => {
        if(!cookies.get('username')){
        alert("debes iniciar sesion")
            window.location.href="./"
        }
       peticionesGet();
       
    }, [])

    // const [search, setSearch] = useState('');
    // const [categoria, setCategoria] = useState('');

    return(
        
        <Fragment>
            <Buscador busqueda={setBuscador} animes={dataAnime} modAnimes={setAnimes} />
            <Carrucel />
            <br />
        
        
        <div className="container row row-cols-2 row-cols-md-5 g-4 py5 md-auto ">
         {animes &&
        animes.map(elem=>(
             <Cards 

                    key={elem.titulo}
                    dato={elem} 
                    
            />
          ))}
          
          </div>

          </Fragment>
      

    );
}
export default AppPelis



