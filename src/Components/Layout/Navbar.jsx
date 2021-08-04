import React,{useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// import data

import { Data} from '../../Data/Nav'

//  import util

import Button from '../Util/Button'

//current user
import { createStructuredSelector } from 'reselect';
import {
  selectCurrentUser,
  selectUsername,
} from '../../Redux/User/User.selector';
import { connect } from 'react-redux';

// signout
import { signoutstart } from '../../Redux/User/User.action';


const Navbarnav = styled.nav`
  width: 100%;
  height: 10rem;
  position: fixed;
  z-index: 300;
  background: ${({ navbar }) => (navbar ? 'white' : 'trasparent')};
`;
const NavbarContainer = styled.div`
  max-width: 1300px;
  height: 100%;
  padding: 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NavbarContainerLink = styled(Link)`
  color: #0D0D0D;
  text-decoration: none;
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
  line-height: 2rem;

  span h4 {
    color: #0D0D0Ddd;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5rem;
  }
  span h5 {
    color: #0D0D0Daa;
    font-size: 1rem;
    font-weight: 400;
  }
`;

const NavbarLogoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

`;

const NavbarMenucontainer = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    margin: 0.5rem;
    text-decoration: none;
    font-size: 1.8rem;
    color: #0D0D0D;
    text-align: center;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    padding: 1rem;
    font-weight: bolder;
    &:hover {
      transform: scale(1.05) translateY(-3px);
      cursor: pointer;
      &::after {
        width: 100%;
        left: 0%;
      }
    }
    &::after {
      content: ' ';
      height: 2px;
      width: 10px;
      background: #d98723;
      box-shadow: 0px 0px 2px black;
      border-radius: 10px;
      position: absolute;
      bottom: 5px;
      right: 0%;
      transition: 0.3s ease-in-out;
    }
  }
`;

const NavbarMenuLink = styled(Link)``;

const NavbarContactcontainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  h1 {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    font-size: ${({ login }) => (login ? '1.4rem' : '0rem')};
    text-align: center;
    font-weight: 400;
    color: #32323266;
    span {
      text-transform: capitalize;
      color: #323232ff;
      font-weight: bold;
      font-size: ${({ login }) => (login ? '1.4rem' : '0rem')};
    }
  }
`;
const Logouta = styled.button`
  text-decoration: none;
  font-weight: 500;
  text-transform: capitalize;
  border-radius: 50px;
  padding: ${({ big }) => (big ? '0 3rem' : '0 1.5rem')};
  background-color: #d99923;
  color: #fff;
  border:none;
  text-align: center;
  user-select: none;
  line-height: 40px;
  height: 4rem;
  letter-spacing: ${({ big }) => (big ? '0.2rem' : '0.02rem')};

  width: ${({ big }) => (big ? '16rem' : '12rem')};
  transition: all 0.3s ease-in-out;
  display: flex;
  &:hover {
    color: #d99923;
    background-color: #0d0d0d;
  }
`;
const Logouttext = styled.span`
  margin: 0 auto;
  font-size: ${({ big }) => (big ? '2.4rem' : '1.8rem')};
`;



const Navbar = (props) => {
    const { currentUser, signout } = props;
    const { NavMainName, NavSubName, NavAddress, NavMenu } = Data;
    const [navbar, setnavbar] = useState(false)


    const changeBackground = () =>{
      if(window.scrollY >=120){
        setnavbar(true)
      }else{
        setnavbar(false)
      }
    }
    window.addEventListener('scroll', changeBackground);



    
  return (
    <Navbarnav navbar={navbar}>
      <NavbarContainer>
        <NavbarLogoContainer>
          <NavbarContainerLink to="/">
            {NavMainName}{' '}
            <span>
              <h4>{NavSubName}</h4>
              <h5>{NavAddress}</h5>
            </span>
          </NavbarContainerLink>
        </NavbarLogoContainer>
        <NavbarMenucontainer>
          {NavMenu.map((item, index) => {
            return (
              <NavbarMenuLink to={item.Link} key={index}>
                {item.name}
              </NavbarMenuLink>
            );
          })}
        </NavbarMenucontainer>
        <NavbarContactcontainer login={!currentUser ? 'false' : 'true'}>
          {!currentUser ? (
            <Button button="true" link="/Sign-in">
              Sign-In
            </Button>
          ) : (
            <div>
              <Logouta button="true" onClick={signout}>
                <Logouttext>sign-out</Logouttext>
              </Logouta>
              <h1>
                Welcome, <span>{currentUser && currentUser.displayName}</span>{' '}
              </h1>
            </div>
          )}
        </NavbarContactcontainer>
      </NavbarContainer>
    </Navbarnav>
  );
}

const mapstatetoprops = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapaction = (dispatch) => ({
  signout: ()=> dispatch(signoutstart()),
});


export default connect(mapstatetoprops, mapaction)(Navbar);
