import { useState } from 'react'
import Titulo from './components/Título.jsx'
import Header from './components/Header.jsx'
import Carrusel from './components/Carrusel.jsx'
import AgendarCitas from './components/AgendarCitas.jsx'
import NuestrosServicios from './components/NuestrosServicios.jsx'
import Cards from './components/Cards.jsx'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Titulo />
      <Header />
      <Carrusel />
      <AgendarCitas />
      <NuestrosServicios />
      <Cards />
    </>
  )
}

export default App
