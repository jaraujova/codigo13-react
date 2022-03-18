import { useState } from "react";
// import {Button, Form } from "react-bootstrap";
import { TextField, Button} from "@mui/material";

const FormUser = () =>{
    const [valorDeInputs, setValorInputs] = useState (
        {
            nombre: "",
            apellido: "",
            correo: "",
            password: "",   
        })

        const handleInputValues = (event) =>{
            const {name, value} = event.target;

            setValorInputs({
                ...valorDeInputs,
                [name]: value,
            })
        }

    return(
    <div>
        <form action="">
            <h4 className="title">Formulario de Usuarios</h4>
            <h5>Nombre {valorDeInputs.nombre}</h5>
            <h5>apellido {valorDeInputs.apellido}</h5>
            <h5>correo {valorDeInputs.correo}</h5>
            <h5>password {valorDeInputs.password}</h5>
            <p>
            <TextField name="nombre" className="form-control" onChange={handleInputValues} type="text"  label="Ingrese su nombre" />
            </p>
            <p>
            <TextField name="apellido" onChange={handleInputValues} type="text"  label="Ingrese su apellido" />
            </p>
            <p>
            <TextField name="correo" onChange={handleInputValues} type="text"  label="Ingrese su email" />
            </p>
            <p>
            <TextField name="password" onChange={handleInputValues} type="text"  label="Ingrese su password" />
            </p>
            <p>
            <Button variant="contained" color="primary" type="submit">
            Registar
          </Button>
            </p>    
        </form>
    </div>
    )
}

export default FormUser;