
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
${'' /* background-image: url('./city.gif'); */}
background-color: #B4ABAB;
background-repeat: no-repeat;
background-size: cover;
border-radius: 50px;
padding: 1rem;
width:80%;
height: 75%;
margin-top: 10rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: inset 0 0 200px black;`


// const BanHead = styled.div`
// ${'' /* font-size: 5rem; */}
// font-weight: bolder;
// color: white;
// text-align: center;
// font-family: Poppins;
// ${'' /* border: 1px solid white; */}
// position: relative;
// display: flex;
// flex-direction: column;
// justify-content: flex-end;
// padding: 10rem 5rem 5rem 2rem;
// `

const Head = styled.h1`
font-size: 6rem;
font-weight: bold;
color: #3C168B;
text-align: left;
font-family: Poppins;
margin: 2rem 2rem;
${'' /* border: 1px solid black; */}
`

const Info = styled.p`
font-size: 1.5rem;
font-weight: normal;
line-height: 1.1;
color: white;
text-align: center;
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
  font-size: 1.5rem;
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
const Prof = styled.div`
${'' /* border: 1px solid black; */}
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 27rem;
`

const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
${'' /* border: 1px solid black; */}
width: 100%;
`
const Upload = styled.div`
font-size: 1.5rem;
font-weight: normal;
line-height: 1.1;
color: #9BAB99;
text-align: center;
font-family: Poppins;
margin: 2rem 2rem;
background-color: white;
padding: 4rem 1rem;
border-radius: 30px;
${'' /* border: 1px solid black; */}
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing: border-box;
${'' /* &:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
} */}
`

const Upload3 = styled.div`
font-size: 1.5rem;
font-weight: normal;
${'' /* line-height: 1.1; */}
color: #9BAB99;
text-align: center;
font-family: Poppins;
margin: 2rem 2rem;
background-color: white;
padding: 4rem 5rem;
border-radius: 30px;
${'' /* border: 1px solid black; */}
${'' /* width: 100%; */}
${'' /* height: 100%; */}
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing: border-box;
&:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    cursor: pointer;
}
`

const Upload2 = styled.div`
font-size: 1.5rem;
font-weight: normal;
line-height: 1.1;
color: #9BAB99;
text-align: center;
font-family: Poppins;
${'' /* margin: 2rem 2rem; */}
background-color: white;
padding: 4rem 1rem;
border-radius: 30px;
${'' /* border: 1px solid black; */}
width: 100%;
${'' /* height: 100%; */}
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing: border-box;
${'' /* &:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
} */}
`

const Top = styled.div`
font-size: 2rem;
font-weight: bold;
color: black;
text-align: center;
font-family: Poppins;
margin: 0rem 2rem;
${'' /* border: 1px solid black; */}
width: 100%;
`

const Img = styled.img`
width: 50px;
hefght: 50px;
align-self: center;
margin: 1rem 0rem;
`
const Span = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
${'' /* height: 100%; */}
${'' /* border: 1px solid black; */}
`
const State = styled.div`
font-size: 2rem;
font-weight: bold;
${'' /* line-height: 1.1; */}
display: flex;
flex-direction: row;
justify-content: center;
${'' /* gap:5rem; */}
color: black;
text-align: center;
font-family: Poppins;
margin: 2rem 4rem;
${'' /* background-color: white; */}
${'' /* padding: 4rem 4rem; */}
border-radius: 20px;
${'' /* border: 1px solid black; */}
width: 100%;
${'' /* height: 100%; */}
`

const Input = styled.input`
font-size: 1rem;
font-weight: normal;
${'' /* line-height: 1.1; */}
color: #9BAB99;
text-align: center;
font-family: Poppins;
${'' /* margin: 2rem 2rem; */}
background-color: white;
padding: 4rem 4rem;
border-radius: 30px;
${'' /* border: 1px solid black; */}
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing: border-box;
overflow: scroll;
`
const UploadNFT = () => {
    const [touch, setTouch] = useState(false);

    const handleClick = () => {
        setTouch(!touch);
    }

    return (
        <MainLayout>
            <div className='flex flex-col items-center justify-center'>
                <Banner>
                    {/* <BanHead> */}
                    <Head>Create your NFT</Head>
                    <Prof>
                        <Box><Top>Upload your album cover</Top>
                            <Upload><Input name='upload' placeholder={`jPEG/PNG/SVG file format under 100 MB`}></Input></Upload></Box>
                        <Box><Top>Generate something cool</Top>
                            <Upload>Coming Soon</Upload></Box>
                    </Prof>
                    <State>Upload Your File</State>
                    <Box><Upload2><Input name='upload' placeholder={`mP3 file format under 100 MB`}></Input></Upload2></Box>
                    <State>Name</State>
                    <Box><Upload2><Input name='upload' placeholder={`give your masterpiece a cool name`}></Input></Upload2></Box>
                    <State>Description</State>
                    <Box><Upload2><Input name='upload' placeholder= {`write up for your masterpiece`}></Input></Upload2></Box>
                    <State>Choose 3 preferred moods that describes your song</State>
                    <Box><Upload2><Input name='upload' placeholder='How are you feeling?'></Input></Upload2></Box>
                    <State>Add to collection</State>
                    <Box><Upload3><Img src='.././Vector.png'/></Upload3></Box>
                    <ButCon><Button>Submit</Button></ButCon>
                </Banner>
                <SiteBoard />

            </div>
        </MainLayout>

    )
}

export default UploadNFT