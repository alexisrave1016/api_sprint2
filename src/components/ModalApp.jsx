import React from 'react'
import { Modal, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'


const useStyles= makeStyles((theme)=>({
    modal:{
        position:'absolute',
        width: 600,
        backgroundColor: 'gray',
        border: '2px solido #0000',
        boxShadow: theme.shadows[5],
        padding:'20px',
        top:'50%',
        left:'50%',
        transform: 'translate(-50%, -50%)'
    
    },
    TextField:{
        width: '100%'
    },

    container:{
        textAlign: 'center'
    }
}))


function ModalApp(props) {
    
    const styles= useStyles();

    const [modal, setModal]= useState(false);

    const abrirCerrarModal =()=>{
        setModal(!modal);
    }



    const body=(
        <div className= {styles.modal}>
            <div align="center">
                <h2>
                    formulario
                </h2>
            </div>
            <TextField label="Nombre" className= {styles.TextField} />
           <br />
           <TextField label="Apellido" className= {styles.TextField} />
           <br />
           <TextField label="Correo electronico" className= {styles.TextField} />
           <br />

        <div align="right">
            <button color="primary">Enviar</button>
            <button>Cancelar</button>
        </div>

        </div>
    )
    return(
        <div className={styles.container}>
        <Button onClick={()=>abrirCerrarModal()}>Abrir Modal</Button>
            <Modal
            open={modal}
            onClose={abrirCerrarModal}>
                {body}
            </Modal>
        </div>
    );
    
}

export default ModalApp

