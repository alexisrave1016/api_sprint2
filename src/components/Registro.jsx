import React, { Component } from 'react'
import axios from 'axios'
import md5 from 'md5'
import uuid from 'react-uuid'
import { Link } from 'react-router-dom'

const URL = "https://api-alexisrave-anime.herokuapp.com/usuario"

export default class Registro extends Component {
    constructor(){
        super()
        this.state={
            data:[],
            form:{
            id:'',
            apellido_paterno:'',
            apellido_materno:'',
            nombre: '',
            username: '', 
            password:''
            }
        }
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form) //imprimir todo el estado 
    }
    handleSutmit=(e)=>{
        e.preventDefault()
    }
    
    RegistroUsuario= async()=>{
        await axios.post(URL,{
            id: uuid,
            apellido_paterno:this.state.form.apellido_paterno,
            apellido_materno:this.state.form.apellido_materno,
            nombre: this.state.form.nombre,
            username: this.state.form.username, 
            password: md5(this.state.form.password)
        })
            .then(res=>{
                alert("usuario registrado:    "+this.state.form.nombre)
            }).catch(error =>{
                console.log("error grabe")
            })
    }


    render() {
        return (
            <div className="Registro py-5 vw-100 text-center text-white bg-black vh-100" >
            <form className="form-signin" onSubmit={this.handleSutmit}>
                <h1 className="h3 mb-3 font-weight-normal">
                    ¡Registrate en nuestro sistema!
                </h1>
                <div className="fadeIn first ">
                    <img 
                    src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1630871290/api_sprint2/logo_vlh6uj.png" 
                    id="icon" 
                    alt="User Icon" 
                    width="100px"/>
                    <h3>Crea una cuenta</h3>
                </div>

                <input
                    type="text"
                    placeholder="Apellido paterno"
                    name="apellido_paterno"
                    className="form-control"
                    autoComplete="off"
                    onChange={this.handleChange}

                />

                <input
                    type="text"
                    placeholder="Apellido materno"
                    name="apellido_materno"
                    className="form-control"
                    autoComplete="off"
                    onChange={this.handleChange}

                    required=""

                />

                <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    placeholder="nombre"
                    required=""
                    onChange={this.handleChange}

                />

                <input
                    type="email"
                    name="username"
                    className="form-control"
                    placeholder="Email"
                    required=""
                    onChange={this.handleChange}

                />

                <input
                    type="Password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    required=""
                    onChange={this.handleChange}

                />
                <br />
                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-1"
                    onClick={()=>this.RegistroUsuario()}
                >
                    Register
                </button>
                <br />
                <Link
                    to="/"
                    className="link"
                >
                    ¿Ya registrado?
                </Link>
            </form>
        </div>
        )
    }
}
