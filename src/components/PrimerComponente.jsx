// Componentes de clase --> escribir "ccc" y lo crea como clase

import React,{ Fragment,Component } from "react";

class PrimerComponente extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    state = {  }
    render() { 
        return ( <Fragment>
            <h1>Hola Mundo desde primer componente</h1>
        </Fragment> );
    }
}
 
export default PrimerComponente;


// React Funcional Component --> escribir "rfc" y lo crea como funcion

// import React from 'react'

// export default function PrimerComponente() {
//   return (
//     <div>
      
//     </div>
//   )
// }



// React Arrow Funcition Export Component --> escribir "rafce" y lo crea como funcion de flecha

// import React from 'react'

// const PrimerComponente = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default PrimerComponente

