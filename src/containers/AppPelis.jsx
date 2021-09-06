import React, { Component } from 'react'
import Cards from '../components/Cards'
import Carrucel from '../components/Carrucel'
const url ="https://api-alexisrave-anime.herokuapp.com/animes"

export default class AppPelis extends Component {
    constructor(){
        super()
        this.state={

            peli: [],
            searchTerm:''
         }
        }
    async componentDidMount(){
        const res = await fetch(url);
        const data = await res.json()
        this.setState({peli:data})
        console.log(data)
    }
   
    render() {


        return (
            <div>
            <Carrucel />
            <div className="container row row-cols-1 row-cols-md-4 g-4 py5 ms-auto">
            {
                this.state.peli.map((movie, index)=>{
                    return(
                        <Cards 
                            key={`${movie}-${index}`}
                            anime= {movie}
                        />
                    )
                })
            }
            
                
            </div>
            </div>
        )
    }
}
