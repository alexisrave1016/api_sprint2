import React, { Component } from 'react'

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
            <img src={portada} id="content_div_one_photo" className="img-fluid card-img text-center "/>
            <div className="card-title"><i class="fas fa-star"></i>{calificaciion}</div>
            </div>
            </div>
        )
    }
}
