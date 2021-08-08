import React,{useEffect,useState} from 'react'
import styled from 'styled-components';
import image from '../../source/church4.jpg';
import { FcLike } from 'react-icons/fc';
import { FaCommentAlt, FaRegCommentAlt } from 'react-icons/fa';
import { GoThumbsup } from 'react-icons/go';
import CommentInput from './CommentInput';
import CommentShowComponents from './Commentshow';
import { firestore } from '../../Firebase/util';

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



const PostList = ({data}) => {
  const newdate = data.date.slice(0, 21)
  const [commentdata, setcommentdata] = useState()
  const [number, setnumbre] =useState()
  useEffect(()=>{

    const Asyncfuc = async() =>{
      const {id} = data
      var alldata = []
        const dataref = await firestore.collection(`bibles/${id}/comments`).orderBy('date','desc');
        await dataref.get().then(request=>{
          request.forEach((doc) =>alldata.push(doc.data()) )
          setnumbre(alldata.length)
        })
        setcommentdata(alldata)
    }
    Asyncfuc()
  
  },[data])
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
          <TweetIcon />
          {number}
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
        {commentdata &&
          commentdata.map((data) => {
            return <CommentShowComponents key={data.id} {...data} />;
          })}

        <CommentInput id={data.id} />
      </CommentlistContainer>
    </Contents>
  );
}

export default PostList
