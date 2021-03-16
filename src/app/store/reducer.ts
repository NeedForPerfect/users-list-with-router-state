import { createReducer, on, Action } from '@ngrx/store';
import { ApiGetIUserDetail, ApiGetIUserDetailSuccess, ApiGetIUsers, ApiGetIUsersSuccess } from './actions';
import { User } from '../models/user.model';

export interface UsersState {
  users: User[];
  usersLoading: boolean;
  detailUser: User;
  detailUserLoading: boolean;
}

const initialState: UsersState = {
  users: [],
  usersLoading: false,
  detailUser: null,
  detailUserLoading: false
};

export const _usersReducer = createReducer(
  initialState,
  on(ApiGetIUsers(), (state, action) => {
    return { ...state, usrersLoading: true };
  }),
  on(ApiGetIUsersSuccess(),  (state, action: { users: User[] }) => {
    const { users } = action;
    return { ...state, usersLoading: false, users };
  }),
  on(ApiGetIUserDetail(), (state, action) => {
    return { ...state, detailUserLoading: false };
  }),
  on(ApiGetIUserDetailSuccess(),  (state, {userDetail}: { userDetail: User }) => {
    console.log('Get User Detial', userDetail);
    return { ...state, usersLoading: true, userDetail };
  })
);

export function usersReducer(state: UsersState | undefined, action: Action) {
  return _usersReducer(state, action);
}
