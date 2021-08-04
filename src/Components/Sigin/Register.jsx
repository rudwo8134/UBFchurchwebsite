import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image from '../../source/church1.jpg';
import Logo from '../../source/logo2.png';
import { AiOutlineLock, AiFillLock } from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi'
import {MdEmail} from 'react-icons/md'

//
import { connect } from 'react-redux';
import { GoogleSignInStart, signupStart } from '../../Redux/User/User.action';

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Loginbox = styled.div`
  width: 1300px;
  height: 80vh;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  overflow: hidden;
  border-radius: 50px;
`;
const LoginBoxLeft = styled.div`
  width: 50%;
  height: 100%;
  background: #32323244;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  span {
    position: absolute;
    bottom:26%;
    font-size: 1.6rem;
    a {
      text-transform: capitalize;
      font-weight: bold;
      font-size: 1.6rem;
      color: green;
    }
  }
`;
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

  img {
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -20%);
    width: 200px;
    height: 150px;
  }
`;
const Loginformcontainer = styled.form`
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
    margin-bottom: 2.5rem;
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
      width: 30rem;
      height: 3rem;
      text-align: center;
      padding: 0.5rem 0.25rem;
      letter-spacing: 0.1rem;
    }
  }
  button {
    font-size: 1.8rem;
    background: #d98723;
    border: none;
    padding: 0.5rem 5rem;
    border-radius: 30px;
    margin-top: 2rem;
    margin-left: 4rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: black;
      color: white;
    }
  }
`;



const Register = (props) => {
  const {SignupStart} = props
  const [Usercredential, Setusercredential] = useState({
    email: '',
    confirmpassword: '',
    password: '',
    displayName: '',
  });
  const handleChange = (e) =>{
    const {name, value} = e.target
    Setusercredential({ ...Usercredential, [name]: value});
  }
  
const handleSubmit = (e) => {
  e.preventDefault();
  const { displayName, email, password, confirmpassword } = Usercredential;
  if (password !== confirmpassword) {
    alert('password does not match! Try again');
    return;
  }
  SignupStart({
    email,
    password,
    displayName,
  });
};

  return (
    <LoginContainer>
      <Loginbox>
        <LoginBoxRight>
          <img src={Logo} alt="ubf" />
        </LoginBoxRight>
        <LoginBoxLeft>
          <Loginformcontainer onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div>
              <label htmlFor="displayName">
                <BiUserCircle />
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="displayName"
                value={Usercredential.displayName}
                placeholder="Full Name"
              />
            </div>
            <div>
              <label htmlFor="email">
                <MdEmail />
              </label>
              <input onChange={handleChange} value={Usercredential.email} type="email" name="email" placeholder="E-mail" />
            </div>
            <div>
              <label htmlFor="password">
                <AiOutlineLock />
              </label>
              <input onChange={handleChange} value={Usercredential.password} type="password" name="password" placeholder="Password" />
            </div>
            <div>
              <label htmlFor="confirmpassword">
                <AiFillLock />
              </label>
              <input
                onChange={handleChange}
                value={Usercredential.confirmpassword}
                type="password"
                name="confirmpassword"
                placeholder="Confirm Password"
              />
            </div>
            <button type="submit">Register</button>
          </Loginformcontainer>
          <span>
            If You already have an account Click to{' '}
            <Link to="/Sign-in">Sign-in</Link>
          </span>
        </LoginBoxLeft>
      </Loginbox>
    </LoginContainer>
  );
};

const MapAction = (dispatch) => ({
  SignupStart: (info) => dispatch(signupStart(info)),
});


export default connect(null, MapAction)(Register);
