import React from 'react'
import styled from 'styled-components'
import {FaBible} from 'react-icons/fa'
import {CgPiano} from 'react-icons/cg'
import ubf from '../source/ubf.png'
import { Data } from '../Data/Info'


const InfoContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const InfoHeader = styled.h1`
  font-size: 3.2rem;
  color: #105aa8;
  font-weight: bold;
  letter-spacing: 0.3rem;
  margin-bottom: 3rem;
  text-transform: uppercase;
`;

const InfoBookContainer = styled.div`
  width: 1300px;
  height: 80%;
  border: 1px solid white;
  display: flex;
  border-radius: 30px;
  box-shadow: 0 0.1rem 1.5rem black;
  background-image: linear-gradient(rgba(40,40,40,0.1), rgba(233,233,233,0.4));
  background-repeat: none;
  background-size: cover;

`
const InfoBookLeft = styled.div`
  width:50%;
  height:100%;
  border-right: 5px solid white;
  `
const InfoLeftHeader = styled.h1`
  margin:3rem;
  text-transform: uppercase;
  font-size: 2.4rem;
  text-align:center;
  font-weight: bold;
  letter-spacing: 0.3rem;
`
const InfoLeftDate = styled.h3`
  text-transform: capitalize;
  font-size: 1.6rem;
  text-align: end;
  margin:3rem;
  margin-bottom: 1rem;
  letter-spacing: 0.1rem;
`; 
const InfoPassagecontainer = styled.div`
  padding: 3rem;
  p {
    display: flex;
    flex-direction: column;
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    line-height: 3rem;
    span {
      font-size: 1.6rem;
      border-bottom: 1px solid black;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      line-height: 2rem;
      color: #374151;
    }
  }
`;

const InfoPassagecontainer2 = styled.div`
  margin-top: 3rem;
  padding: 3rem;
  p {
    display: flex;
    flex-direction: column;
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    line-height: 3rem;
    span {
      font-size: 1.6rem;
      border-bottom: 1px solid black;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      line-height: 2rem;
      color: #374151;
    }
  }
`;

const InfoLogoBookleft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    border-radius: 30px;
    width: 25rem;
    height: 25rem;
  }
  h1 {
    margin-top: 1.2rem;
    font-size: 1.8rem;
    text-transform: capitalize;
  }
  p {
    font-size: 1.3rem;
    color: #4b5563;
  }
`;
const InfoBookRight = styled.div`
  width: 50%;
  height: 100%;
  border-left: 1px solid black;
`;

const InfoBookName = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: center;
  h1 {
    font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
    &:last-child {
      margin-left: 7rem;
    }
    span {
      font-size: 1.8rem;
      margin-left: 1rem;
      color: #374151;
      text-transform: capitalize;
    }
  }
`
const InfoTimewrapeer = styled.div`
  padding: 3rem;
`
const InfoTimewrapeerul = styled.ul`
  list-style: none;
`;
const InfoTimewrapeerli = styled.li`
  font-size: 1.8rem;
  margin-bottom: 4rem;
  border-bottom: 1px dotted black;
  text-transform: uppercase;
  span {
    font-size: 1.8rem;
    margin-left: 1rem;
    color: #374151;
    text-transform: capitalize;
  }
`;
const InfoEtransfer = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  span {
    color: #105aa8;
    font-size: 1.8rem;
    font-weight: bold;
  }
`;



const Info = () => {
  return (
    <InfoContainer>
      <InfoHeader>Brochure for this week</InfoHeader>
      <InfoBookContainer>
        <InfoBookLeft>
          <InfoLeftHeader>He Has Rescued us</InfoLeftHeader>
          <InfoLeftDate>Aug 1 2021</InfoLeftDate>
          <InfoPassagecontainer>
            <p>
              <span>Colossians 1:1 - 14</span>
              13 For he has rescued us from the dominion of darkness and brought
              us into the kingdom of the Son he loves, 14 in whom we have
              redemption, the forgiveness of sins.
            </p>
          </InfoPassagecontainer>
          <InfoLogoBookleft>
            <img src={ubf} alt="logo" />
            <h1>University bible fellowship</h1>
            <p>1335 Morningside Ave, Unit 4, Scarborough, ON, M1B 5M4</p>
          </InfoLogoBookleft>
          <InfoPassagecontainer2>
            <p>
              <span>Colossians 3:16</span>
              Let the message of Christ dwell among you richly as you teach and
              admonish one another with all wisdom through psalms, hymns, and
              songs from the Spirit, singing to God with gratitude in your
              hearts.”.
            </p>
          </InfoPassagecontainer2>
        </InfoBookLeft>

        <InfoBookRight>
          <InfoBookName>
            <h1>
              <FaBible
                style={{
                  fontSize: '1.8rem',
                  marginRight: '1rem',
                  color: '#105aa8',
                }}
              ></FaBible>
              Presider:
              <span>Daniel Kim</span>
            </h1>
            <h1>
              <CgPiano
                style={{
                  fontSize: '1.8rem',
                  marginRight: '1rem',
                  color: '#105aa8',
                }}
              />
              Piano:
              <span>Hannah Kwak</span>
            </h1>
          </InfoBookName>
          <InfoTimewrapeer>
            <InfoTimewrapeerul>
              {Data.map((topics, index) => {
                const { topic, name } = topics;
                return (
                  <InfoTimewrapeerli key={index}>
                    {index + 1}. {topic}
                    <span>{name}</span>
                  </InfoTimewrapeerli>
                );
              })}
            </InfoTimewrapeerul>
          </InfoTimewrapeer>
          <InfoEtransfer>
            E-transferred to <span>scarboroughubf1335@gmail.com</span> or
            offering box
          </InfoEtransfer>
        </InfoBookRight>
      </InfoBookContainer>
    </InfoContainer>
  );
}

// -----------------------------------------------All together
// -----------------(piano #343 “Just As I am”) --------------All together
//  -------------------------#17--------------------------------All together
// --------------------------------------------------------Daniel Kim
// ---------------- Colossians 1:1-14 ----------------------All together
//  --------------------------------------------------------Daniel/Daniella Kim
//  ------------------------------------------------------------------------Elijah Kim
//  ---------------------------#85------------------------------All together
// E-transferred to scarboroughubf1335@gmail.com or offering box
// ------------------------------------------------------------Daniel Kim
// --------------------------------------------Isaac Kim
//  ------------------------------------------------------------------All

export default Info
