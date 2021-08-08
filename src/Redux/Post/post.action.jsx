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

export const postbiblestart = (data) => ({
  type: Postaction.POST_BIBLE_MESSAGE_START,
  payload: data,
});

export const postbibleSuccess = (data) => ({
  type: Postaction.POST_BIBLE_MESSAGE_SUCCESS,
  payload: data,
});

export const postbiblefailed = (error) => ({
  type: Postaction.POST_BIBLE_MESSAGE_FAILED,
  payload: error,
 })

export const postcommentestart = (data) => ({
  type: Postaction.POST_BIBLE_MESSAGE_COMMENTS_START,
  payload: data,
});

export const postcommentSuccess = (data) => ({
  type: Postaction.POST_BIBLE_MESSAGE_COMMENTS_SUCCESS,
  payload: data,
});

export const postcommentfailed = (error) => ({
  type: Postaction.POST_BIBLE_MESSAGE_COMMENTS_FAILED,
  payload: error,
});