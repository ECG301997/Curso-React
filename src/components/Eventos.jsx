import React from 'react'

/*
 * onFocus (cuando un input esta activado o en foco) 
 * onBlur (cuando pulsamos fuera de un input que esta en foco )
 * onChange ( cuando hay un cambio en el componente o input)
 * onClick (cuando se hace un click en el raton sobre el elemento)
 * onDoubleClick(cuando se hace un click en el raton sobre el elemento(nativamente))
 * onKeyDown ( Cuando pulsamos un boton del teclado)
 * onKeyPress (cuando presionamos una tecla)
 * onMouseDown( Cuando presionamos el boton del mouse hacia abajo)
 * onMosuseOver-(Cuando pasamos por encima el ratón)
 * onMouseLeave (Cuando salimos del elemento) 
 */
const foco = () => console.log('estoy en foco') 
const blur = () => console.log('Estoy por fuera del foco')
const change = () => console.log('He cambiado');
const click = () => console.log('me has clickeado');
const doubleClick = () => alert('me has dado doble click');
const pulsarTecla = () => console.log('me estas pulsando');

const Eventos = () => {
  return (
    <>
        <form >
        {/* <input onFocus={e=>console.log('estoy en foco')} type="text"  /> */}
        <input  onFocus={foco}
                onBlur={blur}
                onChange={change}
                onKeyDown={pulsarTecla}
                  type="text"  />
        </form>
        <button onClick={click}
                onDoubleClick={doubleClick}>Pulsame</button>



    </>
  )
}

export default Eventos
