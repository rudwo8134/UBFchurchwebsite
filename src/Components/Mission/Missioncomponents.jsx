import React from 'react'
import styled from 'styled-components'
import Logo from '../../source/logo2.png'
import Image from '../../source/church6.jpg'

const Wrapper = styled.section`
width: 100vw;
height: 100vh;
background-color: white;
`
const ContentsWrapper =styled.div`
  width: 1160px;
  margin: 0 auto;
  padding-top:10vh;
`
const IntroWrapper = styled.div`
  width: 100%;

`
const IntroWrapperheader = styled.span`
  font-size: 3.2rem;
  font-weight: bold;
  color: white;
  text-shadow: 0px 0.5px 1.5px #32323233;
  background-color: #432452;
  border-radius: 30px;
  padding: 1rem 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
`;
const WhoweareContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 2.5rem;
  border-radius: 3rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`
const WhoweareContainertitle = styled.span`
  font-size: 2.6rem;
  letter-spacing: 0.3rem;
  font-weight: bold;
  width: 100%;
  margin: 2rem auto;
  text-transform: capitalize;
`;
const WhoweareContainerimg = styled.img`
  width: 15rem;
  height: 15rem;
  float: left;
  margin:1rem;
  shape-outside: circle(50% at 50% 50%);
  clip-path: circle(90% at 50% 50%);
`;
const WhoweareContainerp = styled.div`
  font-size: 1.8rem;
  line-break: strict;
  white-space: normal;
  width: 90%;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 3rem;
  border-radius: 30px;
  line-height: 2.4rem;
  br{
    content: " ";
    line-height: 3rem;
    display: block;
    margin: 2rem;
  }
`;
const StaffmemberContainer = styled.div`
  width: 90%;
  padding: 3rem;
  margin: 0 auto;
`;
const StaffImgdiv =styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #00000055 ;
  padding-bottom: 3rem;
  margin-top: 3rem;
  flex-wrap: wrap;
`

const Staffinfowrapper =styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-basis: 200px;
flex-shrink: 0;


`
const Staffposition =styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: #000000aa;
  text-transform: uppercase;
  margin-top: 1rem;
`

const StaffName = styled.span`
  margin-top: 0.5rem;
  font-size: 1.8rem;
  text-transform: capitalize;
`;

const StaffImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top:4rem;

`

const Missioncomponents = () => {
  return (
    <Wrapper>
      <ContentsWrapper>
        <IntroWrapper>
          <IntroWrapperheader>Mission statement</IntroWrapperheader>
          <WhoweareContainer>
            <WhoweareContainertitle>Who we are?</WhoweareContainertitle>
            <WhoweareContainerp>
              <WhoweareContainerimg src={Logo} alt="Logo" />
              The University Bible Fellowship Church (UBF) began as a student
              movement in Korea in September of 1961, during a time of national
              turmoil. Discouraged by the political and economic situation of
              Korea after the civil war, students were wandering without
              direction for their lives. At that time, God brought together
              Pastor Samuel Lee and Missionary Sarah Barry. Samuel Lee was a
              Presbyterian pastor with a passion for helping young people. Sarah
              Barry was a missionary sent by the Board of World Missions of the
              Southern Presbyterian Church, USA, who came seeking a way to help
              the war-devastated Korean people with the Bible. Together they
              shared a common belief that the best way to help Korea and the
              world was to plant faith in Christ and hope for the future in the
              hearts of college students who could grow to be future leaders.
              Initially, many students were drawn by English Bible study.
              Through prayer and deep Bible study, the ministry quickly grew
              into a grass roots movement of Christian students.
              <br /> At the heart of this movement was a love for God’s word,
              the Bible. Also, central to this movement was prayer and an
              emphasis on the gospel of Jesus. Pastor Lee spent every morning in
              deep Bible study. Students grew as disciples of Jesus through
              writing Bible reflections. In this way, the ministry was
              Bible-based, Christ-centered and focused on World Mission in
              response to Jesus’ command to make disciples of all nations (Mt
              28:19).
              <br /> Today, UBF is a global ministry that has chapters in 96
              countries. Our UBF missionaries still seek to obey Jesus’ Great
              Commission to make disciples of all nations. As lay missionaries,
              they live with a sacrificial spirit and a giving spirit. College
              students remain at the forefront of the ministry. Students take an
              active role in the ministry as they share their faith with others.
              UBF is committed to making disciples of Jesus Christ, with an
              emphasis on world mission. Christmas offerings are donated for
              world relief purposes. UBF has also participated in the
              establishment of the Bethesda Medical Center in Uganda, which is
              engaged in a healing and disciple-making ministry.
            </WhoweareContainerp>
            <WhoweareContainertitle>Mission Statement</WhoweareContainertitle>
            <WhoweareContainerp>
              University Bible Fellowship (UBF) is an international evangelical
              church (non-denominational) and network of house churches
              dedicated to Christ and his kingdom. Our main focus is to study
              the Bible, grow in the grace and knowledge of our Lord and Savior
              Jesus Christ, and live according to his teachings. We especially
              pray to reach college students and help them grow as his lifelong
              disciples. Our goal is to obey our Lord’s commands to love one
              another and to go and make disciples of all nations (Jn 13:34; Mt
              28:18-20). We pray that God may continue to call and raise lay
              missionaries through us and send them to the ends of the earth (Ac
              1:8).
            </WhoweareContainerp>
            <WhoweareContainertitle>Statement of Faith</WhoweareContainertitle>
            <WhoweareContainerp>
              We believe that there is one God in three Persons: God the Father,
              God the Son, and God the Holy Spirit.
              <br />
              We believe that God created the heavens and the earth and all
              other things in the universe: that He is the Sovereign Ruler of
              all things; that the Sovereign God reveals Himself; we believe in
              his redemptive work and in his final judgment.
              <br />
              We believe that the Bible is inspired by God; that it is the
              truth; that it is the final authority in faith and practice.
              <br />
              We believe that since the fall of Adam, all people have been under
              the bondage and power of sin and are deserving of the judgment and
              wrath of God.
              <br />
              We believe that Jesus Christ, who is God and man, through his
              atoning, sacrificial death on the cross for our sins and his
              resurrection, is the only way of salvation; he alone saves us from
              sin and judgment and purifies us from the contamination of the
              world caused by sin.
              <br />
              We believe that Jesus Christ rose from the dead, ascended into
              heaven and sits at the right hand of God the Father.
              <br />
              We believe that regeneration is by the work of the Holy Spirit,
              and that it is necessary if one is to enter the kingdom of God.
              <br />
              We believe that God sent his Holy Spirit to empower his church to
              witness to Jesus to the ends of the earth.
              <br />
              We believe that we are made righteous by grace alone, through
              faith alone.
              <br />
              We believe that the Holy Spirit works in the heart of every
              believer to lead him.
              <br />
              We believe that the church is the body of Christ and that all
              Christians are members of it.
              <br />
              We believe that Jesus will come again in glory to judge the living
              and the dead.
            </WhoweareContainerp>
            <WhoweareContainertitle>
              Staff members at UBF Scarbrough
            </WhoweareContainertitle>
            <StaffmemberContainer>
              <StaffImgdiv>
                <Staffinfowrapper>
                  <StaffImg src={Image} alt="img" />
                  <Staffposition>Main Paster</Staffposition>
                  <StaffName>Isac Kim</StaffName>
                </Staffinfowrapper>
              </StaffImgdiv>
              <StaffImgdiv>
                <Staffinfowrapper>
                  <StaffImg src={Image} alt="img" />
                  <Staffposition>Main Paster</Staffposition>
                  <StaffName>Isac Kim</StaffName>
                </Staffinfowrapper>
                <Staffinfowrapper>
                  <StaffImg src={Image} alt="img" />
                  <Staffposition>Main Paster</Staffposition>
                  <StaffName>Isac Kim</StaffName>
                </Staffinfowrapper>
                <Staffinfowrapper>
                  <StaffImg src={Image} alt="img" />
                  <Staffposition>Main Paster</Staffposition>
                  <StaffName>Isac Kim</StaffName>
                </Staffinfowrapper>
              </StaffImgdiv>
              <StaffImgdiv>
                <Staffinfowrapper>
                  <StaffImg src={Image} alt="img" />
                  <Staffposition>Main Paster</Staffposition>
                  <StaffName>Isac Kim</StaffName>
                </Staffinfowrapper>
                <Staffinfowrapper>
                  <StaffImg src={Image} alt="img" />
                  <Staffposition>Main Paster</Staffposition>
                  <StaffName>Isac Kim</StaffName>
                </Staffinfowrapper>
                <Staffinfowrapper>
                  <StaffImg src={Image} alt="img" />
                  <Staffposition>Main Paster</Staffposition>
                  <StaffName>Isac Kim</StaffName>
                </Staffinfowrapper>
                <Staffinfowrapper>
                  <StaffImg src={Image} alt="img" />
                  <Staffposition>Main Paster</Staffposition>
                  <StaffName>Isac Kim</StaffName>
                </Staffinfowrapper>
                <Staffinfowrapper>
                  <StaffImg src={Image} alt="img" />
                  <Staffposition>Main Paster</Staffposition>
                  <StaffName>Isac Kim</StaffName>
                </Staffinfowrapper>
                <Staffinfowrapper>
                  <StaffImg src={Image} alt="img" />
                  <Staffposition>Main Paster</Staffposition>
                  <StaffName>Isac Kim</StaffName>
                </Staffinfowrapper>
                <Staffinfowrapper>
                  <StaffImg src={Image} alt="img" />
                  <Staffposition>Main Paster</Staffposition>
                  <StaffName>Isac Kim</StaffName>
                </Staffinfowrapper>
                <Staffinfowrapper>
                  <StaffImg src={Image} alt="img" />
                  <Staffposition>Main Paster</Staffposition>
                  <StaffName>Isac Kim</StaffName>
                </Staffinfowrapper>
              </StaffImgdiv>
            </StaffmemberContainer>
          </WhoweareContainer>
        </IntroWrapper>
      </ContentsWrapper>
    </Wrapper>
  );
}

export default Missioncomponents
