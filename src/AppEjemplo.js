//Como crear un componente desde 0
// El nombre de un componente debe iniciar en Mayusculas
// El componente es una guncion 
// paso 1: importar usestate
import { useState } from "react";
import Heder from './Heder';
import Footer from "./Footer";
import FormRegister from "./Form";
import FormUser from "./FormUser";
const PrimerComponente = () => {
  // al usar use statte, la forma en la que se crea una variable cambia
  //debemos definir el nombre de la variable y la funcion que cambia la variable
  const [count, setCount] = useState(0);


  // retornar una vista
  // usamos return () para indicar que lo que este dentro sera el objeto visual a retornar
  const sumar = () => {
    setCount(count + 1);
  }

  const restar = () => {
    setCount(count - 1);
  }
  return (
    <div>
      <Heder />
      {/* <h1>Formulario de usuarios</h1> */}
      {/* <div>
      <h4>Hola mundo desde el componente {count}</h4>

      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      </div> */} 
      <hr/>
      {/* <FormRegister /> */}
      <FormUser />
      <Footer />
    </div>
  )
}

//luego de crear el compunente debemos exportarlo

export default PrimerComponente;










// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> Mi primer proyecto en React - Julio Araujo
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
