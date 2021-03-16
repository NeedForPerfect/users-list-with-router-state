import { createReducer, on, Action } from '@ngrx/store';
import { ApiGetIUsers, ApiGetIUsersSuccess } from './actions';
import { User } from '../models/user.model';
import { UserRouterState } from '../models/user-router-state.model';

export interface UsersState {
  users: User[];
  usersLoading: boolean;
  detailUser: User;
  detailUserLoading: boolean;
  routerState: UserRouterState;
}

const initialState: UsersState = {
  users: [],
  usersLoading: false,
  detailUser: null,
  detailUserLoading: false,
  routerState: null
};

export const _usersReducer = createReducer(
  initialState,
  on(ApiGetIUsers(), (state, action) => {
    console.log('On ApiGetIUsers works')
    return { ...state, usrersLoading: true };
  }),
  on(ApiGetIUsersSuccess(),  (state, action: { users: User[] }) => {
    const { users } = action;
    console.log('action payload', action);
    return { ...state, usersLoading: false, users };
  })
);

export function usersReducer(state: UsersState | undefined, action: Action) {
  return _usersReducer(state, action);
}
