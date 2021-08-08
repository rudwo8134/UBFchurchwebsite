import React from 'react'
import styled from 'styled-components';
import image from '../../source/church4.jpg';
import { FcLike } from 'react-icons/fc';
import { FaCommentAlt, FaRegCommentAlt } from 'react-icons/fa';
import { GoThumbsup } from 'react-icons/go';
import CommentInput from './CommentInput';

const Contents = styled.div`
  box-sizing: border-box;
  margin: 3rem auto;
  width: 70%;
  min-height: 200px;
  background: white;
  border: none;
  border-radius: 30px;
  padding: 2rem;
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
  color: #828282;
`;
const Paragraph = styled.div`
  margin-top: 1.5rem;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.12rem;
  line-height: 2rem;
`;
const NumberContainer = styled.div`
  padding: 0 1rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
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
    padding: 0.5rem;
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
      &:hover {
        cursor: pointer;
        background: #f9f9f9;
        color: #1877f2;
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
  padding: 1rem;
`;
const Commentshow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
`;
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


const PostList = ({data}) => {
  const newdate = data.date.slice(0, 21)
  return (
    <Contents>
      <Profilecontainer>
        <ProfileImage src={image} alt="lol" />
        <Profilecontentscontainer>
          <Profilename>{data.user}</Profilename>
          <ProfileTime>{newdate}</ProfileTime>
        </Profilecontentscontainer>
      </Profilecontainer>
      <Paragraph>{data.text}</Paragraph>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              aperiam dolore labore dolorem culpa doloribus eveniet, quod
              provident, itaque temporibus, quas dolorum explicabo neque
              asperiores tempore amet ut porro. Hic. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Facilis aperiam dolore labore
              dolorem culpa doloribus eveniet, quod provident, itaque
              temporibus, quas dolorum explicabo neque asperiores tempore amet
              ut porro. Hic.
            </div>
          </ProfileCommenttweet>
        </Commentshow>
        <Commentshow>
          <ProfileImage2 src={image} alt="logo" />
          <ProfileCommenttweet>
            <span>Yesool lee</span>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              aperiam dolore labore dolorem culpa doloribus eveniet, quod
              provident, itaque temporibus, quas dolorum explicabo neque
              asperiores tempore amet ut porro. Hic. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Facilis aperiam dolore labore
              dolorem culpa doloribus eveniet, quod provident, itaque
              temporibus, quas dolorum explicabo neque asperiores tempore amet
              ut porro. Hic.
            </div>
          </ProfileCommenttweet>
        </Commentshow>
        <Commentshow>
          <ProfileImage2 src={image} alt="logo" />
          <ProfileCommenttweet>
            <span>Yesool lee</span>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              aperiam dolore labore dolorem culpa doloribus eveniet, quod
              provident, itaque temporibus, quas dolorum explicabo neque
              asperiores tempore amet ut porro. Hic. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Facilis aperiam dolore labore
              dolorem culpa doloribus eveniet, quod provident, itaque
              temporibus, quas dolorum explicabo neque asperiores tempore amet
              ut porro. Hic.
            </div>
          </ProfileCommenttweet>
        </Commentshow>
        <CommentInput id={data.id}/>
      </CommentlistContainer>
    </Contents>
  );
}

export default PostList
