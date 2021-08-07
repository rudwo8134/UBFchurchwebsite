import { createSelector } from "reselect";

const selectPost = (state) => state.post

export const selecposttdata = createSelector([selectPost], (post) => post.DATA);
export const selectposterror = createSelector([selectPost], (post) => post.Error);
export const selectpostloading = createSelector([selectPost], (post) => post.loading);