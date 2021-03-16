import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiGetIUsers } from 'src/app/store/actions';
import { UsersState } from 'src/app/store/reducer';
import { getUsers, getUsersLoading } from 'src/app/store/selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email'];
  dataSource$ = this.store.select(getUsers);
  loading$ = this.store.select(getUsersLoading);

  constructor(
    private store: Store<UsersState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(ApiGetIUsers()());
  }

}
