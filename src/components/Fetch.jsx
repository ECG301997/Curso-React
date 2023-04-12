
import React, { useState,useEffect } from 'react'

const Fetch = () => {

    // https://jsonplaceholder.typicode.com/users

    const [users,setUsers]=useState([])

    useEffect(() =>{
        const cargaUsuario= async()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json()

            setUsers(data)
            console.log(data);
        }
        cargaUsuario()
    },[])

  return (
    <>
      
    </>
  )
}

export default Fetch
