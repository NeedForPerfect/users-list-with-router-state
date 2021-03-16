import { createSelector } from '@ngrx/store';
import { UsersState } from '../store/reducer';


const _getUsers = createSelector(
  (state: { userState: UsersState }) => state.userState,
  (state: UsersState): any => {
  if (state) return state.users
  else return null;
});
function getUsers(): any { return _getUsers; } // Wrapper for AOT

const _getUsersLoading = createSelector(
  (state: { userState: UsersState }) => state.userState,
  (state: UsersState): any => {
    if (state) return state.usersLoading
    else return null;
});
function getUsersLoading(): any { return _getUsersLoading; } // Wrapper for AOT

export { getUsers, getUsersLoading };
