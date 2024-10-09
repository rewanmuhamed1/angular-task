
import { Data } from "../interfaces/user";
import * as UserActions from './user.actions';
import * as fromRoot from '../state/app-state'
import { createReducer, on } from "@ngrx/store";


export interface UserState {
    allData: Data;
    loading: boolean;
    error: string;
}
/* export interface AppState extends fromRoot.AppState {
    allData: UserState
} */
export const initialState: UserState = {
    allData: {
        page: 0,
        per_page: 0,
        total: 0,
        total_pages: 0,
        users: []
    },
    loading: false,
    error: ''
};

export const userReducer = createReducer(
    initialState,
    on(UserActions.LoadUsers, state => ({
        ...state,
        loading: true
    })),
    on(UserActions.LoadUsersSuccess, (state, { alldata }) => ({ // alldata prop in action
        ...state,
        loading: false,
        allData : alldata
    })),
    on(UserActions.LoadUsersFail, (state, { error }) => ({
        ...state,
        loading: false,
        error: error,
    }))
);

/* export function userReducer(state = initialState, action: UserActions.action): UserState {
    switch (action.type) {
        case UserActions.UserActionTypes.LOAD_USERS: {
            return {
                ...state,
                loading: true
            }
        }
        case UserActions.UserActionTypes.LOAD_USERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                users: action.payload,
            }
        } case UserActions.UserActionTypes.LOAD_USERS_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        }
        default: {
            return state;
        }
    }
} */