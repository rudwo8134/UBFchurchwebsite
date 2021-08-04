import { createSelector } from 'reselect';


const selectUser = (state) => state.user;


export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.Currentuser
);

export const selectUsername = createSelector(
  [selectCurrentUser],
  (Currentuser) => Currentuser.displayName
);