import React from 'react'
import Swal from 'sweetalert2'

export default function Cards(props) {
    const {
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
        <div className="modal-dialog modal-dialog-scrollable">
            <div id="padre" type="button" onClick>
            <img src={portada} id="content_div_one_photo" className="img-fluid card-img text-center " alt="no disponible"/>
            <div className="card-title"><i class="fas fa-star"></i>{calificaciion}</div>
            </div>
        </div>


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
