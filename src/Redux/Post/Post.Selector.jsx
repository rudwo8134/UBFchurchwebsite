import { createSelector } from "reselect";

const selectPost = (state) => state.post

export const selectdata = createSelector([selectPost], (post) => post.DATA);
export const selecterror = createSelector([selectPost], (post) => post.Error);
export const selectloading = createSelector([selectPost], (post) => post.loading);