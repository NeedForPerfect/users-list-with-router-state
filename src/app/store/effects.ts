import { Injectable } from '@angular/core';
import { exhaustMap, filter, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { Action, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { UsersState } from './reducer';
import { ApiGetIUserDetail, ApiGetIUsers, ApiGetIUsersSuccess, ApiGetIUserDetailSuccess } from './actions';
import { UserServiceService } from '../services/user-service.service';
import { getMergedRoute, userState } from './selectors';
import { UserRouterState } from '../models/user-router-state.model';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
      ofType(ApiGetIUsers()),
      mergeMap(() => this.userService.getUsers().pipe(
        map((users) => ApiGetIUsersSuccess()({users}))
      ))
    )
  );

  loadUserDetail$ = createEffect(() => this.actions$.pipe(
    ofType(ApiGetIUserDetail()),
    withLatestFrom(this.store),
    mergeMap(([, state]: [any, { userState: UsersState, router: { state: UserRouterState } }]) => {
      const { userState, router } = state;
      const requestedUserId: number = +router.state.params['id'];
      const existedInStoreUser: User = findRequestedUserExistsInStore(userState, requestedUserId);
      if (existedInStoreUser) {
        return of(existedInStoreUser).pipe(map((userDetail) => ApiGetIUserDetailSuccess()({userDetail})));
      } else {
        return this.userService.getUserDetail(requestedUserId).pipe(
          map((userDetail) => ApiGetIUserDetailSuccess()({userDetail}))
        );
      }
    })
  )
);

  constructor(
    private actions$: Actions,
    private store: Store<{userState: UsersState; router: { state: UserRouterState }}>,
    private userService: UserServiceService
  ) {}
}

function findRequestedUserExistsInStore(userState: UsersState, userId: number): User | null {
  if (userState.users && userState.users) {
    const foundUser: User = userState.users.find(u => u.id === userId);
    return foundUser ? foundUser : null
  } else {
    return null;
  }
}
