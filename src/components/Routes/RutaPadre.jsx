import React from 'react'
import Componente1 from './Componente1'
import Componente2 from './Componente2'
import Componente3 from './Componente3'
import { BrowserRouter, Route, Link  } from 'react-router-dom'


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

      <Link to='/pagina2'>A componente 2</Link> <br/>
      <Link to='/pagina3'>A componente 3</Link>
      

    </BrowserRouter>
  )
}

export default RutaPadre

