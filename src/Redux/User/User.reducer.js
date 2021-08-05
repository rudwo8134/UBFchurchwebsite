import useraction from './User.Type'

const INiTIAL_STATE = {
  Currentuser: null,
  Error:null,
  loading:false
}

const UserReducer = (state = INiTIAL_STATE, action) => {
  switch(action.type) {

      case useraction.SIGN_OUT_START:
      case useraction.EMAIL_SIGN_IN_START:
      case useraction.GOOGLE_SIGN_IN_START:
      case useraction.CREATE_USER_START:
        return{
          ...state,
          loading:true
        }


      case useraction.SIGN_IN_SUCCESS:
        return {
          ...state,
          Currentuser : action.payload,
          error:null,
          loading:false
        };
      
      case useraction.SIGN_OUT_SUCCESS:
        return {
          ...state,
          Currentuser: null,
          error: null,
          loading: false,
        };

      case useraction.CREATE_USER_SUCCESS:
        return {
          ...state,
          Currentuser: null,
          error: null,
          loading:false
        }

      case useraction.SIGN_IN_FAILURE:
      case useraction.SIGN_OUT_FAILURE:
      case useraction.CREATE_USER_FAILURE:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
        
        

      default:
        return state;
  }
}

export default UserReducer;