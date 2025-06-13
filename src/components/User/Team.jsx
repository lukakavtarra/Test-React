import React from 'react'
import { TeamData } from './data'
import DataTemplate from './DataTemplate'
import { Container,Name } from '../../assets/style';

const Team = () => {

  return (
    <Container >
    {TeamData.map(e => {
        return(
            <DataTemplate 
                key={e.id} 
                name={e.name} 
                position={e.position}
                img={e.img}
                fb={e.social.facebook}
                li={e.social.linkedin}
                mail={e.social.mail}
            />
        )
        
    })}
    </Container>
  )
}

export default Team