import React from 'react'
import Hijo from './Hijo';


const Padre = () => {

    const nombres = ['Eduardo', 'Julie', 'Karen'];
    return (
        <>
            <ul>
                {nombres.map(nombre => (
                    <Hijo nombreLista={nombre} />
                ))}
            </ul>
        </>
    )
}

export default Padre
