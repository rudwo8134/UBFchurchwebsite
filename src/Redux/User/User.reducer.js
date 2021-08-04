import useraction from './User.Type'

const INiTIAL_STATE = {
  Currentuser: null,
  Error:null
}

const UserReducer = (state = INiTIAL_STATE, action) => {
  switch(action.type) {
      case useraction.SIGN_IN_SUCCESS:
        return {
          ...state,
          Currentuser : action.payload,
          error:null
        };
      
      case useraction.SIGN_OUT_SUCCESS:
        return {
          ...state,
          Currentuser: null,
          error: null,
        };

      case useraction.CREATE_USER_SUCCESS:
        return {
          ...state,
          Currentuser: null,
          error: null
        }

      case useraction.SIGN_IN_FAILURE:
      case useraction.SIGN_OUT_FAILURE:
      case useraction.CREATE_USER_FAILURE:
        return{
          ...state,
          error:action.payload
        }
        
        

      default:
        return state;
  }
}

export default UserReducer;