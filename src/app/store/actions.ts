import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

const API_GET_USERS = '[API_GET_USERS]';
const API_GET_USERS_SUCCESS = '[API_GET_USERS_SUCCESS]';


// API CALLS
export const _ApiGetIUsers = createAction(API_GET_USERS);
export function ApiGetIUsers(): any { return _ApiGetIUsers; };

export const _ApiGetIUsersSuccess = createAction(API_GET_USERS_SUCCESS, props<{ users: User[] }>());
export function ApiGetIUsersSuccess(): any { return _ApiGetIUsersSuccess };
