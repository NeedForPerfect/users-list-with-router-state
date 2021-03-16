import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiGetIUserDetail } from 'src/app/store/actions';
import { UsersState } from 'src/app/store/reducer';
import { getUserDetail } from 'src/app/store/selectors';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private store: Store<UsersState>
  ) { }

  ngOnInit(): void {
    this.store.select(getUserDetail).subscribe(userDetail => {
      console.log('User Detail', userDetail);
    });
    this.store.dispatch(ApiGetIUserDetail()());
  }

}
