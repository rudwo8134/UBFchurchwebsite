import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import image from '../../source/church6.jpg'
import { firestore } from '../../Firebase/util';
import Button from '../Util/Button';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';


const Wrapper = styled.div`
  padding-top: 10vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  a {
    width: 5%;
    height: 30%;
    margin: 0 auto;
    margin-bottom: 3rem;
  }
`;
const ListWrapper = styled.div`
  margin-top: 4rem;
  margin: 0 auto;
  width: 1180px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 3rem;
  column-gap: 2rem;
  justify-content: center;
  align-items: center;
 
`;
const ListContainer = styled.div`
  width: 80%;
  height: 400px;
  border-radius: 30px;
  background-color: #d9992333;
  margin: 0 auto;
  a{
    text-decoration:none;
    color: black;
  }
`;
const Imagecontainer = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 90%;
  height: 45%;
  img{
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
`
const Textcontainer = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  padding: 2rem;
  width: 90%;
  height: 45%;
  h1 {
    font-size: 1.8rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
  }
  h2 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    text-align: end;
    color: #00000077;
    text-transform: uppercase;
  }
  p{
    font-size: 1.2rem;
    text-transform: capitalize;
    line-height: 1.5rem;
    letter-spacing: 0.1rem;
  }
  h3{
    margin-top: 0.5rem;
    font-size: 1.1rem;
    text-transform: uppercase;
    text-align: end;
    
  }
`;
const Centerdiv = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
;
const Listfile = () => {
  const [arraydata,setData] = useState()
  const [loading, setloading] = useState(false)
  
  useEffect(()=>{
      var alldata = [];
      const fetch = async () => {
        setloading(true)
        const url = await firestore.collection('posts');
        await url.get().then((data) => {
          data.forEach((doc) => alldata.push(doc.data()));
          setData(alldata)
        });
        setloading(false);
      };
      fetch();
  },[])

  if(loading){
    return (
      <Wrapper>
        <Centerdiv>
          <Loader
            type="TailSpin"
            color="black"
            secondaryColor="red"
            height={100}
            width={100}
            timeout={10000}
          />
        </Centerdiv>
      </Wrapper>
    );
  }


  return (
    <Wrapper>
        <Button button link="/sunday/post">
          Post
        </Button>


      <ListWrapper>
        {arraydata &&
          arraydata.map((data) => {
            const { createat, id, reference, text, weekend } = data;
            const date = createat.toString().slice(0, 15);
            const weekenddate = weekend.toDate().toString().slice(0, 15);
            console.log(weekenddate);
            return (
              <ListContainer key={id}>
                <Link to={`/sunday/${id}`}>
                  <Imagecontainer>
                    <img src={image} alt="random" />
                  </Imagecontainer>
                  <Textcontainer>
                    <h1>{weekenddate}</h1>
                    <h2>{date}</h2>
                    <p>{text}</p>
                    <h3>{reference}</h3>
                  </Textcontainer>
                </Link>
              </ListContainer>
            );
          })}
      </ListWrapper>
      
    </Wrapper>
  );
}

export default Listfile
