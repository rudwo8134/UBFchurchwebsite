import React,{useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// import data

import { Data} from '../../Data/Nav'

//  import util

import Button from '../Util/Button'


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
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;



const Navbar = () => {
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
        <NavbarContactcontainer>
          <Button button="true" link="/Sign-in">
            Sign-In
          </Button>
        </NavbarContactcontainer>
      </NavbarContainer>
    </Navbarnav>
  );
}

export default Navbar;
