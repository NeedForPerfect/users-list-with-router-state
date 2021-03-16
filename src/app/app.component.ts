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
export class AppComponent {
}
