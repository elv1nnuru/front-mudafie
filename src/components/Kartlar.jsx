import React from 'react'
import Kart from './Kart'
import KartlarData from '../kart.json'



const Kartlar = () => {
  return (
    <div className='kart-konteyner row d-flex justify-content-center g-3 me-3 p-3'>
     {
        KartlarData.map(kart => (
           <Kart kartinSekli={kart.shekil} kartinBasdigi={kart.title} kartinMetni={kart.body}/> 
        ))
     }

    </div>
  )
}

export default Kartlar