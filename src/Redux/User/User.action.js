import useraction from './User.Type'

export const checkUsersession = () => ({
  type: useraction.CHECK_USER_SESSION,
});


export const GoogleSignInStart = () => ({
  type: useraction.GOOGLE_SIGN_IN_START,
});

export const EmailSignInStart = (emailpassword) => ({
  type: useraction.EMAIL_SIGN_IN_START,
  payload: emailpassword,
});

export const SignInSuccess = (user) => ({
  type: useraction.SIGN_OUT_SUCCESS,
  payload:user
})

export const SignInfailure = (error) => ({
  type: useraction.SIGN_IN_FAILURE,
  payload: error,
});



export const signoutstart = () => ({
  type: useraction.SIGN_OUT_START,
});
export const signoutSUCCESS = () => ({
  type: useraction.SIGN_OUT_SUCCESS,
});
export const signoutFAILURE = (error) => ({
  type: useraction.SIGN_OUT_FAILURE,
  payload: error,
});

export const signupStart = (emailpassword) => ({
  type: useraction.CREATE_USER_START,
  payload: emailpassword,
});
export const signupSuccess = ({ user, additionalData }) => ({
  type: useraction.CREATE_USER_SUCCESS,
  payload: { user, additionalData },
});
export const signupFailure = (error) => ({
  type: useraction.CREATE_USER_FAILURE,
  payload: error,
});