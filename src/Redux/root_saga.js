import {call,all} from 'redux-saga/effects'
import { userSagas } from './User/User.saga'
import { postSagas } from './Post/Post.saga'

export default function*rootSaga(){
  yield all ([
    call(userSagas),
    call(postSagas)
  ])
}