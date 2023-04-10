

import React from 'react'

const SpreadOperator = () => {

    const animalesSalvajes = ['ciervo','lobo','jabalí'];
    const animalesDomesticos = ['perro','gato','hamster'];

    const animales =[...animalesSalvajes,...animalesDomesticos]

    console.log(animales);

    const capilalPaisEuropa={
        España:'Madrid',
        Francia:'Paris',
        Italia:'Roma',
    }

    const capitalPaisAmerica={
        // se puede meter un objeto dentro de otro objeto
        España2:{
            España:'Madrid'
        },
        Colombia:'Bogotá',
        Argentina:'Buenos Aires',
        Chile:'Santiago',
        Mexico: 'Ciudad de Mexico'
    }

    const capitales = {...capilalPaisEuropa,...capitalPaisAmerica}

    console.log(capitales);

  return (
    <>
      <h1>{animales}</h1>
    </>
  )
}

export default SpreadOperator
