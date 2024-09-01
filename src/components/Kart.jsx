import React from 'react'

const Kart = ({kartinSekli,kartinBasdigi,kartinMetni}) => {
  return (
    <div className='kart  col-12 col-md-6 col-lg-3'>
       <img src={kartinSekli} alt="" />
       <h1>{kartinBasdigi}</h1>
       <p>{kartinMetni }</p>
    </div>
  )
}

export default Kart