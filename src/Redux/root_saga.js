import {call,all} from 'redux-saga/effects'
import { userSagas } from './User/User.saga'

export default function*rootSaga(){
  yield all ([
    call(userSagas)
  ])
}