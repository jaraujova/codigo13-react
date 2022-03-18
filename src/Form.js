import { useState } from "react";


const FormRegister = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const handleInputName =(event) =>{
        setNombre(event.target.value)
    }
    const handleInputApellido = (event) =>{
        setApellido(event.target.value)
    }

    return(
        <div>
            <form action="">
                <h4>Formulario Registro</h4>
                <h4>Nombre {nombre} </h4>
                <h4>Apellido {apellido}</h4>
                <p>
                <input type="text"  onChange={handleInputName} placeholder="Ingrese su nombre" />
                </p>
                <p>
                <input type="text" onChange={handleInputApellido} placeholder="Ingrese su apellido" />
                </p>
                <p>
                <input type="text"  placeholder="Ingrese su email" />
                </p>
                <p>
                <input type="text"  placeholder="Ingrese su password" />
                </p>
                <p>
                    
                </p>
                <p>
                <button type="submit">Registro</button>
                </p>    
            </form>
        </div>

    )
}

export default FormRegister;