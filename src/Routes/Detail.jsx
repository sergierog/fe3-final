import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
    let {odontologoid}= useParams()
    const [odonto, setOdonto] = useState([])
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/users/${odontologoid}`)
      .then (res => setOdonto(res.data))
      .catch(err=> console.log(err))
    
      
    }, [])
    

 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Website</th>
      </tr>
      <tr>
        <td>{odonto.name}</td>
        <td>{odonto.email}</td>
        <td>{odonto.phone}</td>
        <td>{odonto.website}</td>
      </tr>
      
    </table>
     
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail