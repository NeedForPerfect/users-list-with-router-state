import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { ApiGetIUserDetail } from 'src/app/store/actions';
import { UsersState } from 'src/app/store/reducer';
import { getUserDeatilLoading, getUserDetail } from 'src/app/store/selectors';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  destroy$ = new Subject();
  userDetail$ = this.store.select(getUserDetail);
  userDetailLoading$ = this.store.select(getUserDeatilLoading);

  constructor(
    private store: Store<UsersState>
  ) { }

  getUserDetail() {
    this.store.dispatch(ApiGetIUserDetail()());
  }

  ngOnInit(): void {
    this.getUserDetail();
  }

}

