import { Injectable } from '@angular/core';
import { exhaustMap, filter, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { UsersState } from './reducer';
import { ApiGetIUserDetail, ApiGetIUsers, ApiGetIUsersSuccess, ApiGetIUserDetailSuccess } from './actions';
import { UserServiceService } from '../services/user-service.service';
import { getMergedRoute } from './selectors';
import { UserRouterState } from '../models/user-router-state.model';

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
    withLatestFrom(this.store.select(getMergedRoute)),
    map(([, routerState]: [any, UserRouterState]) => routerState.params['id']),
    mergeMap((userId) => this.userService.getUserDetail(userId).pipe(
      map((userDetail) => ApiGetIUserDetailSuccess()({userDetail}))
    ))
  )
);

  constructor(
    private actions$: Actions,
    private store: Store<UsersState>,
    private userService: UserServiceService
  ) {}
}

