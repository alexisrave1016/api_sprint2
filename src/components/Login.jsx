import React, { Component } from 'react'
import axios from 'axios'
import md5 from 'md5'
import { Link } from 'react-router-dom'


const URL = "https://api-alexisrave-anime.herokuapp.com/usuario"

export default class login extends Component {
    
    constructor(){
        super()
        this.state={
            form: {
                username:'',
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

    handleOnSubmit= (e)=>{
        e.preventDefault()
    }
    
    iniciarSesion = async () => {
        await axios.get(URL, { params: { 
            username: this.state.form.username,
            password: md5(this.state.form.password) } })
            
            .then(response => {
                return response.data;
            })
            
            .then(response => {
                if (response.length > 0) {
                    var respuesta = response[0];
                    alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
                } else {
                    alert('El usuario o la contraseña no son correctos');
                }
            })
            .catch(error => {
                console.log(error);
            })
    }


    render() {
        return (


            
            <div className="text-center py-5">
            <div className="fadeIn first ">
                    <img 
                    src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1630871290/api_sprint2/logo_vlh6uj.png" 
                    id="icon" 
                    alt="User Icon" 
                    width="100px"/>
                    <h1 className="text-white">Anime Rave</h1>
                </div>
            <form className="form-signin" onSubmit={this.handleOnSubmit} >
                <h1 className="h4 mb-3 font-weight-normal">
                    Inicio de sesión
                </h1>

                <input
                    type="email"
                    id="inputEmail"
                    className="form-control mt-1"
                    placeholder="Email"
                    required=""
                    name="username"
                    onChange={this.handleChange}
                    
                />

                <input
                    type="Password"
                    id="inputPassword"
                    className="form-control mt-1"
                    placeholder="Contreña"
                    required=""
                    name="password"
                    onChange={this.handleChange}
                    
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick = {()=>this.iniciarSesion()}
                >
                    Entrar
                </button>

                <div className="text-white">
                    <p>Iniciar sesión con redes sociales</p>

                    <div className="google-btn btn-primary">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text col-8">
                            <b>Inicia sesión con Google</b>
                        </p>
                    </div>
                </div>
                  <Link
                    to="/registrar"
                    className="Link"
                   >
                    Crear una nueva cuenta
                </Link>
            </form>
        </div>
        )
    }
}
