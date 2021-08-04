import { takeLatest, put, all, call } from 'redux-saga/effects';
import action from './User.Type'
import {
  auth,
  googleprovider,
  createUserProfileDocument,
} from '../../Firebase/util';
import {
  checkUsersession,
  GoogleSignInStart,
  EmailSignInStart,
  SignInSuccess,
  SignInfailure,
  signoutstart,
  signoutSUCCESS,
  signoutFAILURE,
  signupStart,
  signupSuccess,
  signupFailure,
} from './User.action';


export function* getSnapshotFromuserauth(userauth, additionalData){
  try{
    const userRef =yield call (createUserProfileDocument, userauth, additionalData)
    const userSnapshot = yield userRef.get()
    yield put(SignInSuccess({id:userSnapshot.id, displayName:userauth.displayName, email:userauth.email, ...userSnapshot.data()}))
  }catch(error){
    yield put(SignInfailure(error));
  }
}

export function*Signinwithgoogleprovider(){
  try{
    const {user} = yield auth.signInWithPopup(googleprovider)
    yield getSnapshotFromuserauth(user);
  }catch(err){
    yield put(SignInfailure(err))
  }

}

export function* signout() {
  try {
    yield auth.signOut();
    yield put(signoutSUCCESS());
  } catch (error) {
    yield put(signoutFAILURE(error));
  }
}

export function* OnGoogleSignInStart(){
  yield takeLatest (action.GOOGLE_SIGN_IN_START, Signinwithgoogleprovider)
}

export function* SignOutStart() {
  yield takeLatest(action.SIGN_OUT_START, signout);
}

export function*userSagas(){
  yield all ([
    call(OnGoogleSignInStart),
    call(SignOutStart)
  ])
}
