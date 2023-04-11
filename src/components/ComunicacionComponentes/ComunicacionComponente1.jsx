

import React from 'react'

const ComunicacionCpmponente1 = (props) => {

  if(props.cambioEstado===true){
    console.log('el estado es verdadero');
  }

  const llama = ()=>{
    props.llamaPadre()
  }

  const llamaHermano=()=>{
    props.llamaHermano2()
  }

  return (
    <>
<button onClick={llama}>Llama Padre</button>
<button onClick={llamaHermano}>Llama Hermano</button>
    </>
  )
}

export default ComunicacionCpmponente1