import React from 'react'
import { Link } from 'react-router-dom'
import styled,{keyframes} from 'styled-components'
import { AiOutlineArrowRight } from 'react-icons/ai';

const arrowanimation = keyframes`
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(1rem);
  }
`;

const Buttona = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  text-transform: capitalize;
  border-radius: 50px;
  padding: ${({ big }) => (big ? '0 3rem' : '0 1.5rem')};
  background-color: #d99923;
  color: #fff;
  text-align: center;
  user-select: none;
  line-height: 40px;
  height: 4rem;
  letter-spacing: ${({ big }) => (big ? '0.4rem' : '0.02rem')};

  width: ${({ big }) => (big ? '16rem' : '12rem')};
  transition: all 0.3s ease-in-out;
  display: flex;
  &:hover {
    color: #d99923;
    background-color: #0d0d0d;
  }

`;
const Textcontainer = styled.span`
  margin: 0 auto;
  font-size: ${({ big }) => (big ? '1.9rem' : '1.8rem')};
  display: flex;
  justify-content: center;
  align-items: center;

`;
const Arrow = styled(AiOutlineArrowRight)`
  animation-name: ${arrowanimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  margin-left: 1rem;
  font-size: 1.7rem;
  
`;
;




const Button = (props) => {
  const {children, button, link, big, Hero} = props
  if (button){
    return (
      <Buttona to={`${link}`} big={big}>
        <Textcontainer big={big}>
          {children}
          {Hero && <Arrow />}
        </Textcontainer>
      </Buttona>
    );
  }
  return (
    <Link to={`${link}`} big={big}>
      <Textcontainer big={big}>
        {children}
        {Hero && <Arrow />}
      </Textcontainer>
    </Link>
  );
}

export default Button
