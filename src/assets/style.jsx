import styled from 'styled-components';

export const Container = styled.div`
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;

`

export const Card = styled.div`
    text-align:center;
    align-items:center;
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    border-color: #5ab1f4;
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    padding: 25px;
` 

export const Line = styled.div`
    width: 50px;
    border: 1px solid black;
    margin: 20px auto;
`

export const Image = styled.img`
    width: 100px;
    height: 100px;
    object-fit: contain;


`
export const Name = styled.h2`
    color: #5ab1f4;
`
export const Icon = styled.a`
    padding: 5px;
    font-size:26px;
    text-decoration:none;
    text-align:center;
`