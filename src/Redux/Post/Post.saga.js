import { takeLatest, put, all, call } from 'redux-saga/effects';
import action from './Post.type'
import { CreatePostSundaymessage, Createpostbible } from '../../Firebase/util';
import {postsundaySuccess,postsundayfailed, postbiblefailed, postbibleSuccess} from './post.action'


export function*postsundaytool({payload}){
  try{
    yield call(CreatePostSundaymessage, payload)
    yield put(postsundaySuccess(payload))
  }catch(error){
    yield put(postsundayfailed(error))
  }
}

export function*postbibletool({payload}){
  try{
    yield call(Createpostbible, payload)
    yield put (postbibleSuccess(payload))
  }catch(error){
    yield put (postbiblefailed(error))
  }
}

export function*PostSundaystart(){
  yield takeLatest (action.POST_SUNDAY_MESSAGE_START, postsundaytool)
}
export function*PostBiblestart(){
  yield takeLatest(action.POST_BIBLE_MESSAGE_START, postbibletool)
}

export function*postSagas(){
  yield all ([
    call(PostSundaystart),
    call(PostBiblestart)
  ])
}