import React from 'react'
import styled from 'styled-components'
import image from '../../source/church7.jpg'

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

const CommentShowComponents = (props) => {
  const {text,username} = props
  return (
    <Commentshow>
      <ProfileImage2 src={image} alt="logo" />
      <ProfileCommenttweet>
        <span>{username}</span>
        <div>{text}</div>
      </ProfileCommenttweet>
    </Commentshow>
  );
}

export default CommentShowComponents;
