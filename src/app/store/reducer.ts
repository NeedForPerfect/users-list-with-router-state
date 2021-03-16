import { createReducer, on, Action } from '@ngrx/store';
import { ApiGetIUserDetail, ApiGetIUserDetailSuccess, ApiGetIUsers, ApiGetIUsersSuccess } from './actions';
import { User } from '../models/user.model';

export interface UsersState {
  users: User[];
  usersLoading: boolean;
  userDetail: User;
  userDetailLoading: boolean;
}

const initialState: UsersState = {
  users: [],
  usersLoading: false,
  userDetail: null,
  userDetailLoading: false
};

export const _usersReducer = createReducer(
  initialState,
  on(ApiGetIUsers(), (state, action) => {
    return { ...state, usersLoading: true };
  }),
  on(ApiGetIUsersSuccess(),  (state, action: { users: User[] }) => {
    const { users } = action;
    return { ...state, usersLoading: false, users };
  }),
  on(ApiGetIUserDetail(), (state, action) => {
    return { ...state, detailUserLoading: true };
  }),
  on(ApiGetIUserDetailSuccess(),  (state, {userDetail}: { userDetail: User }) => {
    return { ...state, detailUserLoading: false, userDetail };
  })
);

export function usersReducer(state: UsersState | undefined, action: Action) {
  return _usersReducer(state, action);
}
