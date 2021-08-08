import React,{useState} from 'react'
import styled from 'styled-components'
import image  from '../../source/church6.jpg'

import { createStructuredSelector } from 'reselect';
import {
  selectCurrentUser,
} from '../../Redux/User/User.selector';
import { connect } from 'react-redux';
import { postcommentestart } from '../../Redux/Post/post.action';

const CommentInputContainer = styled.form`
  margin-top: 2rem;
  padding: 1rem 0rem;
  border-top: 2px solid #60676e33;
  border-bottom: 2px solid #60676e33;
  display: flex;
  align-items: center;
  button {
    box-sizing: border-box;
    border: none;
    border-radius: 30px;
    font-size: 1.5rem;
    margin-left: 1rem;
    padding: 1rem;
    background: #1877f2;
    color: white;
    text-transform: capitalize;
    letter-spacing: 0.14rem;
    transition: all 0.3s ease-in-out;
    &:hover {
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
const ProfileImage2 = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const CommentInput = (props) => {
  const {id,users,submit} = props
  const [data, setdata] = useState({
    id:id,
    text:"",
    userid:users.id,
    username:users.displayName
  })
  const handlechange = (e) =>{
    const {name,value} =e.target
    setdata({...data, [name]:value})
  }

  const handlesubmit= async(e) =>{
    e.preventDefault()
    await submit(data)
  }

  return (
    <CommentInputContainer onSubmit={handlesubmit}>
      <ProfileImage2 src={image} alt="logo" />
      <CommmentInput
        onChange={handlechange}
        name="text"
        value={data.text}
        placeholder="update you state"
      ></CommmentInput>
      <button type="submit">Post</button>
    </CommentInputContainer>
  );
}

const matoprops = createStructuredSelector({
  users: selectCurrentUser,
});

const mapaction = (dispatch) => ({
  submit: (data) => dispatch(postcommentestart(data)),
});

export default connect(matoprops, mapaction)(CommentInput);
