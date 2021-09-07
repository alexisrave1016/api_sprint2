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
            <img src={portada} id="content_div_one_photo" class="img-fluid card-img text-center "/>
            <div className="card-title"><img id="estrella" src="https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2913.png" />{calificaciion}</div>
            </div>
            </div>
        )
    }
}
