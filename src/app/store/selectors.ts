import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from '../store/reducer';
import { MergedRouteReducerState, UserRouterState } from '../models/user-router-state.model';

export const userState = createFeatureSelector<UsersState>('userState');

export const getUsers = createSelector(
  userState,
  (state: UsersState) => {
  if (state) return state.users
  else return null;
});


export const getUserDeatilLoading = createSelector(
  userState,
  (state: UsersState): any => {
    if (state) return state.userDetailLoading
    else return null;
});



export const getUserDetail = createSelector(
  userState,
  (state: UsersState) => {
  if (state) return state.userDetail
  else return null;
});


export const getUsersLoading = createSelector(
  userState,
  (state: UsersState): any => {
    if (state) return state.usersLoading
    else return null;
});


export const getRouterReducerState = createFeatureSelector<MergedRouteReducerState>('router');


export const getMergedRoute = createSelector(
  getRouterReducerState,
  (routerReducerState: { state: UserRouterState }) => routerReducerState ? routerReducerState.state : null
);


