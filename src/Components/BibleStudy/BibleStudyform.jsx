import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import image from '../../source/church4.jpg'
import Postform from './Postform';
import PostList from './PostList';
import Loader from 'react-loader-spinner';



import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../Redux/User/User.selector';
import {selectpostloading} from '../../Redux/Post/Post.Selector'
import { firestore } from '../../Firebase/util';

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




const BibleStudyform = (props) => {
  const {reload} = props
  const [Data,setData] = useState()
  const [Loading, setLoading] =useState(false)
  useEffect(() => {
    var alldata = [];
    const fetch = async () => {
      setLoading(true);
      const dataref = await firestore
        .collection('bibles')
        .orderBy('date', 'desc');
      await dataref.get().then((request) => {
        request.forEach((doc) => alldata.push(doc.data()));
      });
      setData(alldata);
      setLoading(false);
    };
    fetch();
  }, [reload]);

  const {user} = props
  return (
    <>
      <Wrapper>
        <Contentscontainer>
          <Postform image={image} user={user} />
          {Loading ? (
            <div style={{display:"flex", justifyContent:"center"}}>
              <Loader />
            </div>
          ) : (
            Data &&
            Data.map((data) => {
              return <PostList key={data.id} data={data} />;
            })
          )}
        </Contentscontainer>
      </Wrapper>
    </>
  );
}

const maptoprops = createStructuredSelector({
  user: selectCurrentUser,
  reload: selectpostloading
})

export default connect(maptoprops,null)(BibleStudyform);
