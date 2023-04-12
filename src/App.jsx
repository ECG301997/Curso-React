// import React,{useState} from 'react';
import React from 'react';
import './App.css';


// import PrimerComponente from './components/PrimerComponente';
// import Props from './components/Props';
// import State from './components/State';
// import EstilosTradicionales from './components/EstilosTradicionales';
// import EstilosLinea from './components/EstilosLinea';
// import EstilosModulo from './components/EstilosEnModulo';
// import EstilosConStyled from './components/EstilosConStyled';
// import Refs from './components/Refs';
//  import CicloVidaComponentes from './components/CicloVidaComponentes';
// import Hooks from './components/Hooks';
// import Formularios from './components/Formularios';
// import Eventos from './components/Eventos';
// import RenderizadoCondicional from './components/RenderizadoCondicional';
// import SpreadOperator from './components/SpreadOperator';
// import IterandoArraysObjetos from './components/IterandoArraysObjetos';
// import IterarKeys from './components/IterarKeys';
// import Padre from './components/IterandoComponentes/Padre';
// import ComunicacionComponente1 from './components/ComunicacionComponentes/ComunicacionComponente1';
// import ComunicacionComponente2 from './components/ComunicacionComponentes/ComunicacionComponente2';
// import Fetch from './components/Fetch';
// import Axios from './components/Axios';
import RutaPadre from './components/Routes/RutaPadre';



function App() {
  // const lista = ['Pera ','Manzana ','Uva '];
  // const [estado,setEstado]= useState(false);

  // const estadoComponente=() =>{
  //     setEstado(true)
  // }

  // const hijoLlamaPadre=()=>{
  //     console.log('llamando al padre desde el hijo');
  // }

  // const llamandoAHermano=()=>{
  //   setEstado(true)
  // }

  

  return (
    <>
    {/* {<PrimerComponente/>} */}
    {/* |<Props nombre="Eduardo"/> */}
    {/* <Props frutas={lista} /> */}
    {/* <State/> */}
    {/* <EstilosTradicionales/> */}
    {/* <EstilosLinea/> */}
    {/* <EstilosModulo/> */}
    {/* <EstilosConStyled/> */}
    {/* <Refs/> */}
    {/* <CicloVidaComponentes/> */}
    {/* <Hooks/> */}
    {/* <Formularios/> */}
    {/* <Eventos/> */}
    {/* <RenderizadoCondicional/> */}
    {/* <SpreadOperator/> */}
    {/* <IterandoArraysObjetos/> */}
    {/* <IterarKeys/> */}
    {/* <Padre/> */}
    {/* <ComunicacionComponente1 llamaHermano2={llamandoAHermano} llamaPadre={hijoLlamaPadre} cambioEstado={estado}/>
    <ComunicacionComponente2 nuevoEstado={estado}/>
    <button onClick={estadoComponente}>Pulsa</button> */}
    {/* <Fetch/> */}
    {/* <Axios/> */}
    <RutaPadre/>
    </>
  );
}

export default App;
