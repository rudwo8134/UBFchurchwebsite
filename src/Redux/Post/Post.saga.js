import { takeLatest, put, all, call } from 'redux-saga/effects';
import action from './Post.type'
import {CreatePostSundaymessage } from '../../Firebase/util';
import {postsundaySuccess,postsundayfailed} from './post.action'


export function*postsundaytool({payload}){
  try{
    yield call(CreatePostSundaymessage, payload)
    yield put(postsundaySuccess(payload))
  }catch(error){
    yield put(postsundayfailed(error))
  }
}

export function*PostSundaystart(){
  yield takeLatest (action.POST_SUNDAY_MESSAGE_START, postsundaytool)
}

export function*postSagas(){
  yield all ([
    call(PostSundaystart)
  ])
}