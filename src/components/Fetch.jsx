
import React, { useState, useEffect } from 'react'

const Fetch = () => {


  const [users, setUsers] = useState([])

  useEffect(() => {
    const cargaUsuario = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()

      setUsers(data)
      // console.log(data);
    }
    cargaUsuario()
  }, [])

  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>
              Nombre: {user.name} <br/>
              Apellido: {user.username} <br/>
              Email: {user.email} <br/>
              Phone: {user.phone}<br/>
              <br />
          

          </li>

        ))}
      </ul>
    </>
  )
}

export default Fetch
