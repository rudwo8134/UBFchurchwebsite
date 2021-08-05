import React,{useState} from 'react'
import styled from 'styled-components';
import { biblename } from '../../Data/hero';
import {v4 as uuid} from 'uuid'
import { connect } from 'react-redux';
import { postsundaystart } from '../../Redux/Post/post.action';
import { createStructuredSelector } from 'reselect';
import { selecterror } from '../../Redux/Post/Post.Selector';
import { selectloading } from '../../Redux/Post/Post.Selector';
import { firestore } from '../../Firebase/util';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Main = styled.div`
  background: white;
  max-width: 1180px;
  height: 80%;
`
const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  button {
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
    font-size: 1.9rem;
    transition: all 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    border:none;
    margin: 0 auto;
    text-align: center;
    &:hover {
      color: #d99923;
      background-color: #0d0d0d;
    }
  }
  div {
    width: 1180px;
    padding: 0 30px;
    font-size: 3.4rem;
    margin-top: 1.5rem;
    label {
      width: 400px;
      margin-right: 3rem;
      text-transform: uppercase;
    }
    input {
      border: none;
      border-bottom: 1px solid black;
      margin-left: 3px;
    }
  }
`;

const SundayForm = (props) => {
  const {error, loading, postStart} =props

  console.log(loading)
  const id = uuid()
  const [data, setdata] = useState({
    id: id,
    book: "",
    verse: "",
    start: "",
    end: "",
    presider: "",
    Piano: "",
    praiseworship1: "",
    silentplayer: "",
    specialsong: "",
    Message: "",
    hymn: "",
    praiseworship2: "",
    announcement: "",
    loardprayler: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };
  const handlesubmit = async (e)=>{
    e.preventDefault()
    postStart(data)
    
  }
  return (
    <Wrapper>
      <Main>
        <Form onSubmit={handlesubmit}>
          <div>
            <label htmlFor="book">bible</label>
            <select
              onChange={handleChange}
              name="book"
              value={data.book}
              id="bibles"
            >
              {biblename.map((bible, index) => {
                return (
                  <option key={index} value={bible}>
                    {bible}
                  </option>
                );
              })}
            </select>
            <input
              name="verse"
              value={data.verse}
              onChange={handleChange}
              placeholder="verse"
            ></input>
            <input
              onChange={handleChange}
              name="start"
              value={data.start}
              placeholder="from"
            ></input>
            <input
              onChange={handleChange}
              name="end"
              value={data.end}
              placeholder="end"
            ></input>
          </div>
          <div>
            <label htmlFor="presider">presider</label>
            <input
              onChange={handleChange}
              name="presider"
              value={data.presider}
              placeholder="Presider"
            ></input>
          </div>
          <div>
            <label htmlFor="Piano">Piano</label>
            <input
              onChange={handleChange}
              name="Piano"
              value={data.Piano}
              placeholder="Piano"
            ></input>
          </div>
          <div>
            <label htmlFor="praiseworship1">PraiseandWorship</label>
            <input
              onChange={handleChange}
              name="praiseworship1"
              value={data.praiseworship1}
              placeholder="PraiseandWorship"
            ></input>
          </div>
          <div>
            <label htmlFor="silentplayer">SilentPrayer</label>
            <input
              onChange={handleChange}
              name="silentplayer"
              value={data.silentplayer}
              placeholder="SilentPrayer"
            ></input>
          </div>
          <div>
            <label htmlFor="specialsong">SpecialSong</label>
            <input
              onChange={handleChange}
              name="specialsong"
              value={data.specialsong}
              placeholder="SpecialSong"
            ></input>
          </div>
          <div>
            <label htmlFor="Message">Message</label>
            <input
              onChange={handleChange}
              name="Message"
              value={data.Message}
              placeholder="Message"
            ></input>
          </div>
          <div>
            <label htmlFor="hymn">Hymn</label>
            <input
              onChange={handleChange}
              name="hymn"
              value={data.hymn}
              placeholder="Hymn"
            ></input>
          </div>
          <div>
            <label htmlFor="praiseworship2">Praiseandworship</label>
            <input
              onChange={handleChange}
              value={data.praiseworship2}
              name="praiseworship2"
              placeholder="Praiseandworship"
            ></input>
          </div>
          <div>
            <label htmlFor="announcement">Announcement</label>
            <input
              onChange={handleChange}
              value={data.announcement}
              name="announcement"
              placeholder="Announcement"
            ></input>
          </div>
          <div>
            <label htmlFor="loardprayler">Lordsprayer</label>
            <input
              onChange={handleChange}
              value={data.loardprayler}
              name="loardprayler"
              placeholder="Lordsprayer"
            ></input>
          </div>
          <button type="submit">upload</button>
        </Form>
      </Main>
    </Wrapper>
  );}

const mapselect = createStructuredSelector({
  error: selecterror,
  loading: selectloading
});

const mapaction = dispatch => ({
  postStart: (data) => dispatch(postsundaystart(data))
});

export default connect(mapselect, mapaction)(SundayForm);