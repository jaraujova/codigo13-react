//Como crear un componente desde 0
// El nombre de un componente debe iniciar en Mayusculas
// El componente es una guncion 

const PrimerComponente = () => {
  // retornar una vista
  // usamos return () para indicar que lo que este dentro sera el objeto visual a retornar
  return (
    <div>
      <h1>Hola mundo</h1>
      <div>
      <h4>Hola mundo desde el componente</h4>
      </div>
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
