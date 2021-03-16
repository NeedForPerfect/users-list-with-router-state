import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiGetIUserDetail, ApiGetIUsers } from 'src/app/store/actions';
import { UsersState } from 'src/app/store/reducer';
import { getUsers, userState } from 'src/app/store/selectors';

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

    this.store.dispatch(ApiGetIUsers()());
    this.store.select(getUsers).subscribe(
      (users) => {
        console.log('We have got Users', users);
      }
    );


    this.store.dispatch(ApiGetIUserDetail()());

    this.store.select(userState).subscribe(userDetail => {
      console.log('User State', userDetail);
    });
  }

}
