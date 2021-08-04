import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import image from '../../source/church7.jpg'
import Logo from '../../source/logo2.png'
import {FcGoogle} from 'react-icons/fc'
import {FaUserCircle} from 'react-icons/fa'
import {AiOutlineLock} from 'react-icons/ai'
const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`

const Loginbox = styled.div`
  width: 1300px;
  height: 80vh;
  background:white;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
`
const LoginBoxLeft = styled.div`
  width: 50%;
  height: 100%;
  background: #32323244;
  display: flex;
  justify-content: center ;
  align-items:center ;
  flex-direction: column ;
  span{
    font-size: 1.6rem;
    margin-top: 2rem;
    a{
      text-transform: capitalize;
      font-weight: bold;
      font-size: 1.6rem;
      color: green;
    }
  }
`
const LoginBoxRight = styled.div`
  width: 50%;
  height: 100%;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(122, 122, 122, 0.3) 10%,
      rgba(122, 122, 122, 0.4) 20%,
      rgba(122, 122, 122, 0.5) 30%,
      rgba(122, 122, 122, 0.6) 40%,
      rgba(122, 122, 122, 0.6) 50%,
      rgba(122, 122, 122, 0.7) 60%,
      rgba(122, 122, 122, 0.7) 70%,
      rgba(122, 122, 122, 0.7) 80%,
      rgba(122, 122, 122, 0.8) 90%,
      rgba(122, 122, 122, 0.9) 100%
    ),
    url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  position: relative;

  img{
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%,-20%);
    width: 200px;
    height: 150px;
  }
`;
const Loginformcontainer = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 4.6rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #d98723;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
  }
  div {
    font-size: 3.2rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    label {
      margin-right: 1rem;
      padding: 0.5rem 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        font-size: 2.4rem;
      }
    }
    input {
      border: none;
      border-radius: 30px;
      text-align: center;
      padding: 0.5rem 0.25rem;
      letter-spacing: 0.1rem;
    }
  }
  button {
    font-size: 2.5rem;
    background: #d98723;
    border: none;
    padding: 0.5rem 5rem;
    border-radius: 30px;
    margin-top: 2rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: black;
      color: white;
    }
  }
`;
const LoginGooglecontainer = styled.div`
  margin-top: 1rem;
  border-top: 0.3rem dotted #33333377;
  border-bottom: 0.3rem dotted #33333377;
  width: 50%;
  height: 10%;
  text-align: center;
  h1 {
    font-size: 1.8rem;
    text-align: center;
    color: #333333aa;
  }
`;
const Googlemark = styled(FcGoogle)`
  font-size: 5rem;
  margin-top: 1rem;
  background: white;
  border-radius: 50%;
  transition: all 0.3 ease-in-out;
  &:hover {
    transform: scale(1.06) rotate(-3deg);
    background: #1963ab;
  }
`;



const Login = () => {
  return (
    <LoginContainer>
      <Loginbox>
        <LoginBoxLeft>
          <Loginformcontainer >
            <h1>Sign In</h1>
            <div>
              <label htmlFor="username"><FaUserCircle/></label>
              <input type="text" name="username" placeholder="UserName" />
            </div>
            <div>
              <label htmlFor="password"><AiOutlineLock/></label>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <button type="submit">Login</button>
          </Loginformcontainer>
          <LoginGooglecontainer>
            <h1>Login with </h1>
            <Googlemark></Googlemark>
          </LoginGooglecontainer>
          <span>
            If You don't have an account Click to{' '}
            <Link to="/register">Register</Link>
          </span>

        </LoginBoxLeft>
        <LoginBoxRight>
          <img src={Logo} alt="ubf" />
        </LoginBoxRight>
      </Loginbox>
    </LoginContainer>
  );
}

export default Login
