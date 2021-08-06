import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaBible } from 'react-icons/fa';
import { CgPiano } from 'react-icons/cg';
import ubf from '../../source/ubf.png';
import { firestore } from '../../Firebase/util';
import Loader from 'react-loader-spinner';


const InfoContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InfoHeader = styled.h1`
  margin-top: 6rem;
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
  background-image: linear-gradient(
    rgba(40, 40, 40, 0.1),
    rgba(233, 233, 233, 0.4)
  );
  background-repeat: none;
  background-size: cover;
`;
const InfoBookLeft = styled.div`
  width: 50%;
  height: 100%;
  border-right: 5px solid white;
`;
const InfoLeftHeader = styled.h1`
  margin: 3rem;
  text-transform: uppercase;
  font-size: 2.4rem;
  text-align: center;
  font-weight: bold;
  letter-spacing: 0.3rem;
`;
const InfoLeftDate = styled.h3`
  text-transform: capitalize;
  font-size: 1.6rem;
  text-align: end;
  margin: 3rem;
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
`;
const InfoTimewrapeer = styled.div`
  padding: 3rem;
`;
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
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`


const Broucherdisplay = ({
  match: {
    params: { id },
  },
}) => {
  const [data, setdata] = useState();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const lol = async () => {
      try {
        setloading(true);
        const dataref = await firestore
          .collection('posts').doc(`${id}`)
        const snapshot = await dataref.get();
        await setdata(snapshot.data());
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    lol();
  }, [id]);
    function endOfWeek(date) {
      var lastday = date.getDate() - (date.getDay() - 1) + 6;
      return new Date(date.setDate(lastday));
    }
    var dt = new Date();
    var weekend = endOfWeek(dt).toString().slice(0, 15);

    if (loading) {
      return (
        <Wrapper>
          <Loader
            type="TailSpin"
            color="black"
            secondaryColor="red"
            height={100}
            width={100}
            timeout={10000}
          />
        </Wrapper>
      );
    }

  return (<InfoContainer>
      <InfoHeader>Brochure</InfoHeader>
      <InfoBookContainer>
        <InfoBookLeft>
          <InfoLeftHeader>He Has Rescued us</InfoLeftHeader>
          <InfoLeftDate>{weekend}</InfoLeftDate>
          <InfoPassagecontainer>
            <p>
              <span>{data && data.reference}</span>
              {data && data.text}
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
              <span>{data && data.presider}</span>
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
              <span>{data && data.Piano}</span>
            </h1>
          </InfoBookName>
          <InfoTimewrapeer>
            <InfoTimewrapeerul>
              <InfoTimewrapeerli>
                1.Praise and Worship
                <span>{data && data.praiseworship1}</span>
              </InfoTimewrapeerli>
              <InfoTimewrapeerli>
                2.Silent prayer
                <span>{data && data.silentplayer}</span>
              </InfoTimewrapeerli>
              <InfoTimewrapeerli>
                3.Representative prayer
                <span>{data && data.represetativeplayer}</span>
              </InfoTimewrapeerli>
              <InfoTimewrapeerli>
                4.Passage reading
                <span>{data && data.passagereading}</span>
              </InfoTimewrapeerli>
              <InfoTimewrapeerli>
                5.Special Song
                <span>{data && data.specialsong}</span>
              </InfoTimewrapeerli>
              <InfoTimewrapeerli>
                6.Message
                <span>{data && data.Message}</span>
              </InfoTimewrapeerli>
              <InfoTimewrapeerli>
                7.Hymn(Offering)
                <span>{data && data.hymn}</span>
              </InfoTimewrapeerli>
              <InfoTimewrapeerli>
                8.Praise and Worship
                <span>{data && data.praiseworship2}</span>
              </InfoTimewrapeerli>
              <InfoTimewrapeerli>
                9.Announcements & prayer topics
                <span>{data && data.announcement}</span>
              </InfoTimewrapeerli>
              <InfoTimewrapeerli>
                9.Lord’s prayer
                <span>{data && data.loardprayler}</span>
              </InfoTimewrapeerli>
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
};

export default Broucherdisplay;
