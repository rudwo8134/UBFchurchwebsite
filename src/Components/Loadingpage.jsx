import React from 'react'
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import styled,{keyframes} from 'styled-components';
import Image from '../source/church2.jpg'

const animation = keyframes`
0%{
  transform:translateY(-500px);
  opacity:0
}
50%{
  transform:translateY(-250px) scale(1.25);
  opacity:0.5
}
100%{
  transform:translateY(0px) scale(1.4) ;
  opacity:1;
  color: #ffffff;
}

`;

const Wrapper = styled.div`
  background: #d99923;
  position: absolute;
  z-index: 3000;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 5rem;
    font-weight: bold;
    transform: skew(-10deg);
    transition: all 5s ease-in-out;
    animation: ${animation} 3s ease-in-out infinite;
  }
`;

const Loadingpage = () => {
  return (
    <Wrapper>
      <Loader
        type="ThreeDots"
        color="#000000"
        secondaryColor="red"
        height={200}
        width={200}
        timeout={10000}
      />
      <h1>Welcome to UBF</h1>
    </Wrapper>
  );
}

export default Loadingpage
