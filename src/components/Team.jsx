import React from 'react'

const Team = ({kartinSekli,kartinBasdigi,kartinMetni}) => {
  return (
    <div className='team col-12 col-md-6 col-lg-6'>
        <img src={kartinSekli} alt="" />
      <h1>{kartinBasdigi}</h1>
      <p>{kartinMetni}</p>




    </div>
  )
}

export default Team