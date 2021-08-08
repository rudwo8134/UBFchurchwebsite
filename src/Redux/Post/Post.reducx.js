import actiontype from './Post.type'

const INITIAL_STATE = {
  DATA: null,
  Error:null,
  loading:false
}

const Postreducer = (state=INITIAL_STATE, action)=>{
  switch (action.type) {
    case actiontype.POST_SUNDAY_MESSAGE_START:
    case actiontype.POST_BIBLE_MESSAGE_START:
    case actiontype.POST_BIBLE_MESSAGE_COMMENTS_START:
      return {
        ...state,
        loading: true,
      };
    case actiontype.POST_SUNDAY_MESSAGE_SUCCESS:
    case actiontype.POST_BIBLE_MESSAGE_SUCCESS:
    case actiontype.POST_BIBLE_MESSAGE_COMMENTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      };
    case actiontype.POST_SUNDAY_MESSAGE_FAILED:
    case actiontype.POST_BIBLE_MESSAGE_FAILED:
    case actiontype.POST_BIBLE_MESSAGE_COMMENTS_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default Postreducer;