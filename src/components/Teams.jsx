import React from 'react'
import Team from './Team'
import TeamData from '../team.json'
import '../assets/css/Team.css'

const Teams = () => {
  return (

    <div className='team-konteyner'>
      <div  className='team-head'>
        <h1>OUR TEAM</h1>
        <p>A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers</p>

      </div> 

      <div  className='team-kart  row d-flex justify-content-center  align-items-center g-3 me-3 p-3'>
      {
        TeamData.map(team =>(
          <Team kartinSekli={team.shekil} kartinBasdigi={team.title} kartinMetni={team.body}/>
        )

        )

       }
    </div>
    </div>

    
  )
}

export default Teams