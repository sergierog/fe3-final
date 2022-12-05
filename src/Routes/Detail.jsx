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
      <h1>Detail Dentist id </h1>
      <h2>{odonto.name}</h2>
      <h3>{odonto.email}</h3>
      <h3>{odonto.phone}</h3>
      <p>{odonto.website}</p>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail