import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import Cookies from 'universal-cookie/es6'
const url = "https://api-alexisrave-anime.herokuapp.com/usuario?id=1"
const cookies = new Cookies()
const EditarEliminar = () => {

    const [user, setUser] = useState({})


   useEffect(() => {
       
       
        setUser({id: 25, nombre:"alexis", username:"jajajjaja@hotmail.com",apellido_materno:"bebe",apellido_paterno:"chucha", password:""})

       
   }, [])


    const peticionPut= async()=>{
       await axios.put(url, user) 
       console.log('estoy bien');


       }
    

    return (
        <div>
        <form className="form-signin w-100">
            <h1 className="h4 mb-3 font-weight-normal text-white">
                Configuracion
            </h1>

            <input
                type="nombre"
                id="inputNombre"
                className="form-control mt-1"
                value={cookies.get('nombre')}
            />

            <input
                type="email"
                id="inputEmail"
                className="form-control mt-1"
                value={cookies.get('username')}
            />

            <input
                type="Password"
                id="inputPassword"
                className="form-control mt-1"
                placeholder="Contraseña Nueva"
                
            />

            <button
                type="submit"
                className="btn btn-primary btn-block "
                onClick={()=>peticionPut()}
            >
                Actualizar
            </button>

            <button
                type="submit"
                className="btn btn-primary btn-block m-1"
            >
                Eliminar cuenta
            </button>
        </form>
    </div>

    )
}

export default EditarEliminar
