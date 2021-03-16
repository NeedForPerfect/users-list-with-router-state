import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

const API_GET_USERS = '[API_GET_USERS]';
const API_GET_USERS_SUCCESS = '[API_GET_USERS_SUCCESS]';

const API_GET_USER_DETAIL = '[API_GET_USER_DETAIL]';
const API_GET_USER_DETAIL_SUCCESS = '[API_GET_USER_DETAIL_SUCCESS]';


export const _ApiGetIUsers = createAction(API_GET_USERS);
export function ApiGetIUsers(): any { return _ApiGetIUsers; };

export const _ApiGetIUsersSuccess = createAction(API_GET_USERS_SUCCESS, props<{ users: User[] }>());
export function ApiGetIUsersSuccess(): any { return _ApiGetIUsersSuccess };


export const _ApiGetIUserDetail = createAction(API_GET_USER_DETAIL);
export function ApiGetIUserDetail(): any { return _ApiGetIUserDetail; };

export const _ApiGetIUserDetailSuccess = createAction(API_GET_USER_DETAIL_SUCCESS, props<{ userDetail: User }>());
export function ApiGetIUserDetailSuccess(): any { return _ApiGetIUserDetailSuccess };


