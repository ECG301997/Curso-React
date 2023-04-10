import React, { useEffect, useState } from 'react'

const Hooks = () => {

    const [color,setColor] = useState('yellow');
    const [contador,setContador] = useState(0);



    useEffect(()=>{
        let intervalo = setInterval(()=>{setContador(contador + 1)},1000)
        return ()=>{
            clearInterval(intervalo)
        }
        

    },[contador])

    const fondo = {
        width: '100%',
        height: '1000px',
        backgroundColor: color
    }
    
    const cambioColor = ()=>{
        if(color === 'yellow')
        setColor('darkGray')
        if(color === 'darkGray')
        setColor('darkBlue')
        if(color === 'darkBlue')
        setColor('yellow')
    }

  return (
    <>
      <div style={fondo} className="container">
      <button onClick={cambioColor} >Cambiar Color</button>
      <h1>Contador:   {contador}</h1>

      </div>
    </>
  )
}

export default Hooks
