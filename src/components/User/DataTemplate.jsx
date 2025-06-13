import React from 'react'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Image,Line,Card,Name,Icon } from '../../assets/style';


const DataTemplate = (props) => {
  return (
    
      <Card>
        <Image src={props.img} alt="" />
        <Name className='name'>{props.name}</Name>
        <p className='position'>{props.position}</p>
        <Line></Line>
        <Icon href={props.fb}><FaFacebook /> </Icon>
        <Icon href={props.li}><FaLinkedin /> </Icon>
        <Icon href={props.mail}><IoIosMail /> </Icon>
        </Card>
  )

}

export default DataTemplate