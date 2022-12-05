import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/ContextProvider'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {odontologos} = useContextGlobal()
  const odontologoSelected = odontologos.find( odontologo => odontologo.id === odontologo.id)
  
  
  

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
       
       {odontologos.map((od) => <Link to ={"/detail/"+ od.id}>
        <Card key ={od.id} name={od.name} username={od.username} id = {od.id} />
        </Link>)}
        
        
      </div>
    </main>
  )
}

export default Home