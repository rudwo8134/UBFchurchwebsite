import React, { useState, useEffect, useRef } from 'react';
import styled,{css} from 'styled-components'
import { newsdata } from '../Data/intro'
import { IoArrowForward,IoArrowBack } from 'react-icons/io5';

const IntroWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0d0d0d;
`
const Introcontent = styled.div`
  width: 1300px;
  margin: 0rem auto;
  padding: 20rem 0rem;
`
const IntroTitle = styled.h1`
  font-size: 4.0rem;
  text-align: center;
  color: #f1f1f1;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  transform: skewX(-9deg);
  text-shadow: 0 0.3rem 1rem #444444;
  margin-bottom: 4rem;
`
const IntroNewcontainer = styled.div`
  background: white;
  width: 100%;
  height: 70rem;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  div {
    width: calc(100%-100px);
    height: 100%;
    span {
      position: absolute;
      bottom: 10%;
      left: 50%;
      transform: translate(-50%, 10%);
      text-align: left;
      width: 100%;

      h1 {
        font-size: 4rem;
        text-transform: capitalize;
        color: white;
        padding: 0 4rem;
        margin-bottom: 1rem;
        background: #cd853fbb;
      }
      h2 {
        font-size: 2rem;
        padding: 0 4rem;
        color: white;
      }
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
const arrowButtons = css`
  position: absolute;
  top:50%;
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`
const PrevArrow = styled(IoArrowBack)`
  left: 5%;
  ${arrowButtons}
`;
const NextArrow = styled(IoArrowForward)`
  right: 5%;
  ${arrowButtons}
`;

const Intro = () => {
    const [current, setCurrent] = useState(0);
    const length = newsdata.length;
    const timeout = useRef(null);

useEffect(() => {
  const nextSlide = () => {
    setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  };
  timeout.current = setTimeout(nextSlide, 3000);

  return function () {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  };
}, [current, length]);

const nextSlide = () => {
  if (timeout.current) {
    clearTimeout(timeout.current);
  }
  setCurrent(current === length - 1 ? 0 : current + 1);
};

const prevSlide = () => {
  if (timeout.current) {
    clearTimeout(timeout.current);
  }
  setCurrent(current === 0 ? length - 1 : current - 1);
};

if (!Array.isArray(newsdata) || newsdata.length <= 0) {
  return null;
}

  return (
    <IntroWrapper>
      <Introcontent>
        <IntroTitle>Recent UBF News</IntroTitle>
        <IntroNewcontainer>
          {newsdata.map((news, index) => {
            const dates = new Date(news.date)
            const real = dates.toLocaleDateString(`en-US`)
            return (
              index === current && (
                <div key={index}>
                  <span>
                    <h1>{news.eventname}</h1>
                    <h2>{real}</h2>
                  </span>
                  <img src={news.image} alt={news.eventname} />
                </div>
              )
            );
          })}
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </IntroNewcontainer>
      </Introcontent>
    </IntroWrapper>
  );
}

export default Intro
