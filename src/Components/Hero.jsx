import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Image from '../source/church5.jpg'
import Button from './Util/Button';
import { biblename } from '../Data/hero';
import axios from 'axios';
import Loadingpage from './Loadingpage';



const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(122,122,122, 0.1) 10%,
      rgba(122,122,122, 0.2) 20%,
      rgba(122,122,122, 0.2) 30%,
      rgba(122,122,122, 0.2) 40%,
      rgba(122,122,122, 0.3) 50%,
      rgba(122,122,122, 0.3) 60%,
      rgba(122,122,122, 0.4) 70%,
      rgba(122,122,122, 0.5) 80%,
      rgba(122,122,122, 0.5) 90%,
      rgba(122,122,122, 0.6) 100%
    ),
    url(${Image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  position: relative;
`;

const HeroContentsBox = styled.div`
  text-align: center;
  width: 50%;
  height: 30rem;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    width: 60rem;
    text-align: end;
    font-size: 1.6rem;
    color: #0d0d0d99;
    margin-top: 3rem;
    margin-bottom: 6rem;
    text-transform: capitalize;
  }
  h1 {
    font-size: 7.2rem;
    text-align: center;
    margin-bottom: 6rem;
    color: #0d0d0d;
    font-weight: bold;
    text-transform: capitalize;
  }
  p {
    font-size: 2.2rem;
    line-height: 3.2rem;
    color: #0d0d0dcc;
    font-family: 400;
    width: 60rem;
  }
`;
const Smoothwrapper = styled.div`
  position: absolute;
  top:  90%;
  width: 100vw;
  height: 10vh;
  background: linear-gradient(
    to bottom,
    rgba(4, 4, 4, 0.0) 10%,
    rgba(4, 4, 4, 0.14) 20%,
    rgba(4, 4, 4, 0.3) 30%,
    rgba(4, 4, 4, 0.4) 40%,
    rgba(4, 4, 4, 0.5) 50%,
    rgba(4, 4, 4, 0.6) 60%,
    rgba(4, 4, 4, 0.6) 70%,
    rgba(4, 4, 4, 0.7) 80%,
    rgba(4, 4, 4, 0.8) 90%,
    rgba(4, 4, 4, 0.9) 100%
  );
`;
;


const Hero = () => {
  const [verse, Setverse] = useState()
  const [num, Setnum]= useState()
  const [loading, setloading] = useState(true)

  
  useEffect(() => {
    const random = Math.floor(Math.random() * 8) + 1;
    const random2 = Math.floor(Math.random() * 21) + 1;
    const random3 = Math.floor(Math.random() * 5) + 1;
    const random4 = random3 + 1;

    axios
      .get(
        `https://bible-api.com/${biblename[random2]}+${random}:${random3}-${random4}`
      )
      .then((request) => {
        Setnum(request.data.reference);
        Setverse(
          `${request.data.verses[0].text} ${request.data.verses[1].text}`
        );
        setloading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if(loading){
    return(
      <Loadingpage/>
    )
  }

  return (
    <HeroContainer>
      <HeroContentsBox>
        <h1>University Bible Fellowship</h1>
        <p>
          {verse && verse}
        </p>
        <h2>{num && num}</h2>
        <Button big="true" button="true" Hero="true">Let's Start</Button>
      </HeroContentsBox>
      <Smoothwrapper/>
    </HeroContainer>
  );
}

export default Hero
