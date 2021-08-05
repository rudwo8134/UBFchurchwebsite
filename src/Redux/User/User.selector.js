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

export const selectLoading = createSelector(
  [selectUser],
  (selectUser) => selectUser.loading
);

export const selecterror = createSelector(
  [selectUser],
  (selectUser) => selectUser.Error
);