import React from 'react'
import { Link } from 'react-router-dom'


export default function Cards(props) {
    const {
        id,
        portada,
        calificaciion,
        
        // titulo,
        // lanzamiento,
        // duracion,
        // descripcion
    
    } = props.dato   
       
    // const {portada, descripcion, titulo}=await Swal.fire({

    // })
        
    return (
        <Link to={`./detalle/${id}`}>
        <div className="modal-dialog modal-dialog-scrollable ">
            <div id="padre">
            <img src={portada} id="content_div_one_photo" className="img-fluid card-img text-center border border-white" alt="no disponible"/>
            <div className="card-title"><i class="fas fa-star"></i>{calificaciion}</div>
            </div>
        </div>
        </Link>


    )
}




/*import React, { Component } from 'react'

export default class Cards extends Component {
        render() {

            const {
                titulo,
                portada,
                lanzamiento,
                calificaciion,
                duracion,
                descripcion} = this.props.anime       
                
                return (
            
            <div>
            <div id="padre">
            <img src={portada} id="content_div_one_photo" className="img-fluid card-img text-center " alt="no disponible"/>
            <div className="card-title"><i class="fas fa-star"></i>{calificaciion}</div>
            </div>
            </div>
        )
    }
}*/
