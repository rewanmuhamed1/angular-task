import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { SearchComponent } from './components/search/search.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { userReducer } from './store/user.reducers';

import { EffectsModule } from '@ngrx/effects';
import { userEffect } from './store/user.effect';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    PaginatorComponent,
    NavbarComponent,
    UserDetailsComponent,
    SearchComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatPaginatorModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({ users : userReducer }),
    EffectsModule.forRoot(userEffect),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
