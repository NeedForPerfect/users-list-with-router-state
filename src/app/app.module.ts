import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { usersReducer } from './store/reducer';
import { HttpClientModule } from '@angular/common/http';
import { UserEffects } from '../app/store/effects';
import { routerReducer, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { MergedRouterStateSerializer } from '../app/store/routes-serialzer/router-serialzer';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExportMaterialModule } from './shared/material/export-material.module';

export const routerStateConfig = {
  stateKey: 'router', // state-slice name for routing state
};

const routes: Routes = [
  {path: 'users', component: UserListComponent },
  {path: 'users/:id', component: UserDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({userState: usersReducer, [routerStateConfig.stateKey]: routerReducer }),
    StoreRouterConnectingModule.forRoot(routerStateConfig),
    EffectsModule.forRoot([UserEffects]),
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ExportMaterialModule
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: MergedRouterStateSerializer,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

