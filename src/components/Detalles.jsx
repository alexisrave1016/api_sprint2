import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const url = "https://api-pelis.herokuapp.com/animes?id="

function Detalles() {

    const [movie, setMovie] = useState([])

    const { id } = useParams();

    const peticionGet = async()=>{
        await axios.get(url+id)
        .then(res=>{
            console.log(res.data)
            setMovie(res.data[0])
          
        }).catch(error=>{
            console.log(error)
        })
  
      }
  
    useEffect(() => {
        peticionGet();
    }, []);

    return (
        <div>
            <figure className="figure d-flex container">
            <img src={movie.portada} className="figure-img img-fluid rounded m-3" alt="imagen"/>
            <div>
            <h4 className="m-3">{movie.titulo}</h4>
            <figcaption className="figure-caption m-3">{movie.descripcion}</figcaption>
            <h6 className="m-3">Fecha de prublicacion: {movie.lanzamiento}</h6>
            <h6 className="m-3">Duracion: {movie.duracion}</h6>
            </div>
            </figure>

        </div>
    )
}

export default Detalles