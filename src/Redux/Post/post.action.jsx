import Postaction from './Post.type'

export const postsundaystart = (data) =>({
  type: Postaction.POST_SUNDAY_MESSAGE_START,
  payload:data
})

export const postsundaySuccess = (data) => ({
  type: Postaction.POST_SUNDAY_MESSAGE_SUCCESS,
  payload:data
});

export const postsundayfailed = (error) => ({
  type: Postaction.POST_SUNDAY_MESSAGE_FAILED,
  payload:error
});