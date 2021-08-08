import React,{useState} from 'react'
import styled from 'styled-components';

import { connect } from 'react-redux';
import { postbiblestart } from '../../Redux/Post/post.action';
import { createStructuredSelector } from 'reselect';
import {selectpostloading} from '../../Redux/Post/Post.Selector'
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';



const Contents = styled.div`
  margin: 3rem auto;
  width: 70%;
  min-height: 200px;
  background: white;
  border: none;
  border-radius: 30px;
`;
const Contentstitle = styled.span`
  text-transform: uppercase;
  display: block;
  font-size: 2.5rem;
  line-height: 3.4rem;
  color: #1c1e21;
  text-align: center;
  border-bottom: 0.5px dotted #60676e33;
  letter-spacing: 0.3rem;
`;
const Profilecontainer = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  padding-bottom: 0rem;
`;
const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const Profilename = styled.span`
  margin-left: 1rem;
  font-size: 1.5rem;
`;
const TextForm = styled.form`
  padding: 2rem;
`;
const TextArea = styled.input`
  width: 100%;
  min-height: 80px;
  font-size: 2rem;
  border: none;
  padding: 1rem;
  margin-bottom: 1rem;
`;
const Button = styled.button`
  display: block;
  width: 40%;
  margin: 0 auto;
  font-size: 2rem;
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: #fbccd2;
    color: #333333ff;
  }
`;
const Centercontainer = styled.div`
  display: flex;
  justify-content: center;

`

const Postform = ({ image, user, submit, loading }) => {
  const [data, setdata] = useState({
    text: '',
    user: user && user.displayName,
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await submit(data);
    await setdata({...data, text:''})
  };
  return (
    <Contents>
      <Contentstitle> Upload Post</Contentstitle>
      <Profilecontainer>
        <ProfileImage src={image} alt="lol" />
        <Profilename>{user && user.displayName}</Profilename>
      </Profilecontainer>
      <TextForm onSubmit={handleSubmit}>
        <TextArea
          name="text"
          onChange={handlechange}
          value={data.text}
          placeholder={`What do you think? ${user && user.displayName}`}
        ></TextArea>
        {loading ? (
          <Centercontainer>
            <Loader type="TailSpin" color="#000000" width={30} height={30} />
          </Centercontainer>
        ) : (
          <Button disabled={loading ? true : false} type="submit">
            Post
          </Button>
        )}
      </TextForm>
    </Contents>
  );
};

const mapselect = createStructuredSelector({
  loading: selectpostloading
})

const Maptoaction = dispatch =>({
  submit: (data) =>dispatch(postbiblestart(data))
})

export default connect(mapselect, Maptoaction)(Postform);
