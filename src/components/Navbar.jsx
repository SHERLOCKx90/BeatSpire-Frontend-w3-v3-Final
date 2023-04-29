import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Section = styled.div`
display: flex;
justify-content: center;
background-color: rgba(0, 0, 0, 0.8); /* Adjust the alpha value to control the level of translucency */
backdrop-filter: blur(10px); /* Applies the blur effect to the background */
position: fixed;
z-index: 999;
width: 100%;
padding: 0rem 3rem;
align-items: center;
color: white;
font-family: Poppins;
`
const Container = styled.div`
 ${'' /* width: 100%; */}
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 20px 0;
 z-index:1000;
`
const Links = styled.div`
 display: flex;
 align-items: center;
 gap: 200px;
 ${'' /* border: 1px solid white; */}
 z-index:2000;
`
const Logo = styled.img`
  width: 40px;
  &:hover{
    transition: 0.1s ease-in-out;
    transform: scale(1.05);
    cursor: pointer;
    ${'' /* color: #7E10A4; */}
  }
`
const List = styled.ul`
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-size: 1.2rem;
  font-weight: normal;
  font-family: Poppins;
  ${'' /* border: 1px solid black; */}
  margin: 0 10rem;
`
const ListItem = styled.li`
  cursor:pointer;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: normal;
  font-family: Poppins;
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.05);
    color: #DB75FF;
    font-family:
  }
`

const Icon = styled.img`
  cursor: pointer;
  width: 20px;
`
const Icons = styled.div`
 display: flex;
 align-items: center;
 gap: 20px;
 padding: 0px 40px 0px 40px;
  ${'' /* border: 1px solid black; */}
`
const Button = styled.button`
  cursor: pointer;
  background-color: #540072;
  color: #00FFBA;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-weight: normal;
  font-family: Poppins;
  &:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    background-color: #00B78A;
    color: black;
  }
`

// const Link = styled.link`
// color:white;`

const Navbar = () => {
  return (
    <div className="bg-transparent">
      <Section>
        <Container>
          <Links>
            <Logo src='public\beatspire-logo.svg' />
            <List>
              <ListItem><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></ListItem>
              <ListItem><Link to='/artist' style={{ textDecoration: 'none' }}>Artists</Link></ListItem>
              <ListItem><Link to='/marketplace' style={{ textDecoration: 'none' }}>Marketplace</Link></ListItem>
              <ListItem><Link to='/socialgood' style={{ textDecoration: 'none' }}>Social Good</Link></ListItem>
            </List>
          </Links>
          <Icons>
            <Button>Connect Wallet</Button>
            <Button>Explore</Button>
          </Icons>
        </Container>
      </Section>
    </div>
  )
}

export default Navbar