import React from 'react'
import Componente1 from './Componente1'
import Componente2 from './Componente2'
import Componente3 from './Componente3'
import './Padre.css'
import { BrowserRouter, Route, NavLink  } from 'react-router-dom'
import RutasDinamicas from './RutasDinamicas'


const RutaPadre = () => {
  return (
    <BrowserRouter>
      {/* exact = para que sea la ruta principal y no la renderice junto con otros
    sensitiva = para que distinga de mayusculas y minusculas  
  */}
      {/* <Route path='/' exact component={Componente1}/>
    <Route path='/pagina2' component={Componente2}/>
    <Route path='/pagina3' component={Componente3}/>
    <Route path='/pagina4' component={()=><h2>Componente 4</h2>}/> */}

      <Route exact path='/' >
        <Componente1/>
      </Route>
      <Route path='/pagina2'>
        <Componente2 />
      </Route>
      <Route path='/pagina3'>
        <Componente3 />
      </Route>

      <NavLink activeStyle={{color:'red'}} to='/pagina2'>A componente 2</NavLink><br />
      <NavLink activeClassName="estiloLink" to='/pagina3'>A componente 3</NavLink>


      <Route path='/users/:id' component={RutasDinamicas}/>
      

    </BrowserRouter>
  )
}

export default RutaPadre

