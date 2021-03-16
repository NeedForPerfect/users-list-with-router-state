import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiGetIUserDetail, ApiGetIUsers } from './store/actions';
import { UsersState } from './store/reducer';
import { getMergedRoute, getUserDetail, getUsers, userState } from '../app/store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store<UsersState>
  ) {

  }

  ngOnInit(): void {

    // this.store.select(getUsers).subscribe(
    //   (users) => {
    //     console.log('We have got Users', users);
    //   }
    // );

    // this.store.dispatch(ApiGetIUsers()());

    // this.store.dispatch(ApiGetIUserDetail()());

    // this.store.select(userState).subscribe(userDetail => {
    //   console.log('User State', userDetail);
    // });

  }

}
