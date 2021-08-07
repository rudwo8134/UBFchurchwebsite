import React from 'react'
import styled from 'styled-components'
import image from '../../source/church4.jpg'
import Postform from './Postform';
import { FcLike } from 'react-icons/fc';
import { FaCommentAlt, FaRegCommentAlt } from 'react-icons/fa';
import {GoThumbsup} from 'react-icons/go'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../Redux/User/User.selector';

const Wrapper = styled.div`
  width: 100vw;
  padding-top: 10vh;
  background: #f0f2f5;
`;
const Contentscontainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  overflow: scroll;
`
const Contents = styled.div`
  box-sizing: border-box;
  margin: 3rem auto;
  width: 70%;
  min-height: 200px;
  background: white;
  border: none;
  border-radius: 30px;
  padding:2rem;
`;
const Profilecontainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0rem;
`;
const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const Profilecontentscontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`;
const Profilename = styled.span`
  width: 100%;
  font-size: 1.5rem;
  text-align: start;
`;
const ProfileTime = styled.span`
  width: 100%;  
  text-align: start;
  font-size: 1.3rem;
  color:#828282;
`;
const Paragraph = styled.div`
  margin-top:1.5rem;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.12rem;
  line-height: 2rem;
`
const NumberContainer = styled.div`
padding:0 1rem;
margin-top: 2rem;
display: flex;
justify-content: space-between;
align-items: center;
`
const Number = styled.div`
  font-size: 1.5rem;
`;
const Thubicons = styled(FcLike)`
  font-size: 1.5rem;
  margin-right: 1rem;
`;
const Tweet = styled.div`
  font-size: 1.5rem;
  text-transform: uppercase;
`;
const TweetIcon = styled(FaCommentAlt)`
  font-size: 1.5rem;
  color: #1877f2;
`;
const Likecontainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  border-top: 2px solid #60676e33;
  border-bottom: 2px solid #60676e33;
  display: flex;
  justify-content: space-between;
  div {
    padding:0.5rem;
    width: 50%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 100%;
      color: #828282;
      font-size: 2rem;
      border: none;
      background: none;
      letter-spacing: 0.3rem;
      transition: all 0.3s ease-in-out;
      border-radius: 30px;
      &:hover{
        cursor: pointer;
        background: #f9f9f9;
        color:#1877F2;
        font-weight: bold;
      }
    }
  }
`;
const Tumbicons = styled(GoThumbsup)`
  font-size: 1.5rem;
  margin-right: 1rem;
`;
const CommentsIcons = styled(FaRegCommentAlt)`
  font-size: 1.5rem;
  margin-right: 1rem;
`;
const CommentlistContainer = styled.div`
  padding:1rem;

`
const Commentshow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
`
const ProfileImage2 = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const ProfileCommenttweet = styled.div`
  box-sizing: border-box;
  padding: 1.5rem;
  margin-left: 1rem;
  background: #f0f2f5;
  border-radius: 30px;
  font-weight: 200;
  span {
    width: 100%;
    text-align: start;
    font-size: 1.3rem;
    color: #050505;
    font-weight: bold;
  }
  div {
    margin-top: 0.3rem;
    color: #050505dd;
    font-size: 1.5rem;
    --webkit-font-smoothing: antialiased;
    line-height: 1.333;
  }
`;
const CommentInputContainer = styled.form`
  margin-top: 2rem;
  padding: 1rem 0rem;
  border-top: 2px solid #60676e33;
  border-bottom: 2px solid #60676e33;
  display: flex;
  align-items: center;
  button{
    box-sizing: border-box;
    border:none;
    border-radius: 30px;
    font-size: 1.5rem;
    margin-left: 1rem;
    padding:1rem;
    background:#1877f2;
    color:white;
    text-transform: capitalize;
    letter-spacing: 0.14rem;
    transition: all 0.3s ease-in-out;
    &:hover{
      cursor: pointer;
      background: black;
    }
  }
`;
const CommmentInput = styled.input`
  box-sizing: border-box;
  margin-left: 1rem;
  height: 20px;
  width: 100%;
  padding: 1rem;
  border: none;
  background: #f0f2f5;
  border-radius: 30px;
  font-size: 1.5rem;
`;



const BibleStudyform = (props) => {
  const {user} = props
  return (
    <Wrapper>
      <Contentscontainer>
        <Postform image={image} user={user} />
        <Contents>
          <Profilecontainer>
            <ProfileImage src={image} alt="lol" />
            <Profilecontentscontainer>
              <Profilename>Jane Lee</Profilename>
              <ProfileTime>thu 2021 02 30</ProfileTime>
            </Profilecontentscontainer>
          </Profilecontainer>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            sed commodi eaque eos nobis quod sunt distinctio temporibus ratione
            pariatur minus sint libero, officiis possimus perspiciatis ducimus
            vero eveniet eum.
          </Paragraph>
          <NumberContainer>
            <Number>
              <Thubicons />
              34
            </Number>
            <Tweet>
              <TweetIcon /> 23
            </Tweet>
          </NumberContainer>
          <Likecontainer>
            <div>
              <button>
                <Tumbicons />
                Like
              </button>
            </div>
            <div>
              <button>
                <CommentsIcons />
                Comment
              </button>
            </div>
          </Likecontainer>
          <CommentlistContainer>
            <Commentshow>
              <ProfileImage2 src={image} alt="logo" />
              <ProfileCommenttweet>
                <span>Yesool lee</span>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis aperiam dolore labore dolorem culpa doloribus eveniet,
                  quod provident, itaque temporibus, quas dolorum explicabo
                  neque asperiores tempore amet ut porro. Hic. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Facilis aperiam dolore
                  labore dolorem culpa doloribus eveniet, quod provident, itaque
                  temporibus, quas dolorum explicabo neque asperiores tempore
                  amet ut porro. Hic.
                </div>
              </ProfileCommenttweet>
            </Commentshow>
            <Commentshow>
              <ProfileImage2 src={image} alt="logo" />
              <ProfileCommenttweet>
                <span>Yesool lee</span>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis aperiam dolore labore dolorem culpa doloribus eveniet,
                  quod provident, itaque temporibus, quas dolorum explicabo
                  neque asperiores tempore amet ut porro. Hic. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Facilis aperiam dolore
                  labore dolorem culpa doloribus eveniet, quod provident, itaque
                  temporibus, quas dolorum explicabo neque asperiores tempore
                  amet ut porro. Hic.
                </div>
              </ProfileCommenttweet>
            </Commentshow>
            <Commentshow>
              <ProfileImage2 src={image} alt="logo" />
              <ProfileCommenttweet>
                <span>Yesool lee</span>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis aperiam dolore labore dolorem culpa doloribus eveniet,
                  quod provident, itaque temporibus, quas dolorum explicabo
                  neque asperiores tempore amet ut porro. Hic. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Facilis aperiam dolore
                  labore dolorem culpa doloribus eveniet, quod provident, itaque
                  temporibus, quas dolorum explicabo neque asperiores tempore
                  amet ut porro. Hic.
                </div>
              </ProfileCommenttweet>
            </Commentshow>
            <CommentInputContainer>
              <ProfileImage2 src={image} alt="logo" />
              <CommmentInput placeholder="update you state"></CommmentInput>
              <button>Post</button>
            </CommentInputContainer>
          </CommentlistContainer>
        </Contents>
      </Contentscontainer>
    </Wrapper>
  );
}

const maptoprops = createStructuredSelector({
  user: selectCurrentUser
})

export default connect(maptoprops,null)(BibleStudyform);
