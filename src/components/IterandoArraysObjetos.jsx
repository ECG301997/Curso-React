

import React from 'react'

const IterandoArraysObjetos = () => {

    const animales = ['gato', 'perro', 'conejo', 'hamster']

    const personas = [
        {
            id: 0,
            nombre: 'Maria',
            puesto: 'limpiadora'
        },
        {
            id: 1,
            nombre: 'Eduardo',
            puesto: 'Desarrollador'
        },
        {
            id: 2,
            nombre: 'Sara',
            puesto: 'Bar'
        }
    ]

    return (
        <>
            <ul>
                {animales.map(animal => (
                    <li>{animal}</li>
                ))}
            </ul>

            <ul>
                {personas.map(persona => (
                    <li key={persona.id}>
                        Id: {persona.id}<br />
                        Nombre: {persona.nombre}<br />
                        Puesto: {persona.puesto}<br />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default IterandoArraysObjetos
