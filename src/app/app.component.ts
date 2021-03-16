import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiGetIUsers } from './store/actions';
import { UsersState } from './store/reducer';
import { getUsers } from '../app/store/selectors';

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
    this.store.dispatch(ApiGetIUsers()());
    this.store.select(getUsers()).subscribe(
      (users) => {
        console.log('We have got Users', users);
      }
    );
  }

}
