

import React from 'react'

const IterarKeys = () => {

    const animal = {
        nombre:'coco',
        especio:'delfin',
        edad:5,
        acuario:'Valencia',
        adiestrador:'Marcelo'
    }

    const key = Object.keys(animal)
  return (
    <>
      <ul>
        {key.map(k=>(
            <li>{k}: {animal[k]}</li>
        ))}
      </ul>
    </>
  )
}

export default IterarKeys
