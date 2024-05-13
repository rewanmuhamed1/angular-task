
import { createAction, props } from '@ngrx/store';
import { Data } from '../interfaces/user';

export enum UserActionTypes {
    LOAD_USERS = "[User] Load Users",
    LOAD_USERS_SUCCESS = "[User] Load Users Success",
    LOAD_USERS_FAIL = "[User] Load Users Fail"
}


export const LoadUsers = createAction(UserActionTypes.LOAD_USERS , props<{ page: number }>());
export const LoadUsersSuccess = createAction(UserActionTypes.LOAD_USERS_SUCCESS, 
props<{alldata:Data }>());
export const LoadUsersFail = createAction( UserActionTypes.LOAD_USERS_FAIL , props<{error: string}>());



