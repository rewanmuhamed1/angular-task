import { Data } from './../interfaces/user';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from "@ngrx/store";
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UserService } from '../services/user.service'
import * as UserActions from './user.actions';


@Injectable()
export class userEffect {

  constructor(private actions$: Actions, private userService: UserService) { }

   loadUsers$: Observable<Action> = createEffect(() => 
    this.actions$.pipe(
      ofType(UserActions.LoadUsers), // type of action 
      switchMap((action) => { // Use switchMap to switch to a new observable
        const page = action.page; // Extract the page number from the action payload
        return this.userService.getUsers(page).pipe( // Fetch users based on the page number
          map((alldata ) => UserActions.LoadUsersSuccess({ alldata: alldata as Data })),
          catchError((error) => of(UserActions.LoadUsersFail({ error: error.message })))
        );
      })
    )
  ); 

}
