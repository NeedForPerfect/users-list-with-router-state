import { Injectable } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { UsersState } from './reducer';
import { ApiGetIUsers, ApiGetIUsersSuccess } from './actions';
import { UserServiceService } from '../services/user-service.service';

@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(ApiGetIUsers()),
    mergeMap(() => this.userService.getUsers().pipe(
      map((users) => ApiGetIUsersSuccess()({users}))
    ))
  )
);

  constructor(
    private actions$: Actions,
    private store: Store<UsersState>,
    private userService: UserServiceService
  ) {}
}
