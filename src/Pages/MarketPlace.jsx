import React from 'react'
import MainLayout from '../Layout/MainLayout'
import styled, { keyframes } from 'styled-components'
import TopArtists from './components/TopArtists'
import SiteBoard from './components/SiteBoard'
import CreateNft from './components/CreateNft'
import RiseArtists from './components/RiseArtists'
import { useState } from 'react'
import '../Styles/App.css'
import ArtistReg from './components/ArtistRegistration'
import TopNft from './components/TopNft'
import Hottest from './components/Hottest'
import Newest from './components/Newest'


const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;


const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-50px);
    ${'' /* transition: transform 1s ease-in-out; */}
  }
`;

const Form = styled.div`
  width: max-content;
  height: max-content;
  background-color: #99ABA6;
  border-radius: 30px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  padding: 16px;
  color: black;
  z-index: 1;
  animation: ${({ showCard }) => showCard ? fadeIn : fadeOut} 0.5s ease-in-out forwards;
`;

const Banner = styled.div`
background-image: url('./city.gif');
background-repeat: no-repeat;
background-size: cover;
border-radius: 50px;
padding: 1rem;
width:80%;
height: 75%;
margin-top: 10rem;
display: flex;
box-shadow: inset 0 0 200px black;`


const BanHead = styled.div`
${'' /* font-size: 5rem; */}
font-weight: bolder;
color: white;
text-align: center;
font-family: Poppins;
${'' /* border: 1px solid white; */}
position: relative;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 10rem 5rem 5rem 2rem;
`

const Head = styled.h1`
font-size: 10rem;
font-weight: bold;
color: white;
text-align: left;
font-family: Poppins;
`

const Info = styled.p`
font-size: 1.5rem;
font-weight: normal;
line-height: 1.1;
color: white;
text-align: left;
font-family: Poppins;
`
const Button = styled.button`
  cursor: pointer;
  background-color: black;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-weight: normal;
  font-family: Poppins;
  z-index: 10;
  &:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    background-color: white;
    color: black;
  }
`
const Button2 = styled.button`
  cursor: pointer;
  background-color: white;
  color: black;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-weight: normal;
  font-family: Poppins;
  z-index: 10;
  &:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    background-color: black;
    color: white;
  }
`
const ButCon = styled.div`
display: flex;
justify-content: flex-start;
margin: 20px 0px;
gap: 1rem;
margin-top: 3rem;
z-index: 10;
`

const ArtistPage = () => {
  // const [touch, setTouch] = useState(false);

  // const handleClick = () => {
  //   setTouch(!touch);
  // }

  return (
    <MainLayout>
      <div className='flex flex-col items-center justify-center'>
        <Banner>
          <BanHead>
            <Head>MarketPlace</Head>
            <Info>Experience our whole new music NFT marketplace</Info>
            <ButCon>
              <Button>Place Bid</Button>
              <Button2>Explore All</Button2>
            </ButCon>

            {/* {touch && <Form showCard={setTouch}>
              <ArtistReg />
            </Form>} */}
          </BanHead>

        </Banner>

        <TopNft />


        <Hottest />

        <Newest />
        <SiteBoard />
        

      </div>
    </MainLayout>

  )
}

export default ArtistPage