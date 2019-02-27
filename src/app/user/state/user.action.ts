
import { Action } from '@ngrx/store';


export enum UserActionTypes {
    ToggleShowUserName = '[User] Toggle Show Username'
}

export class ToggleShowUserName implements Action {
    readonly type = UserActionTypes.ToggleShowUserName
    constructor(public payload: boolean) {}
}

export type UserActions = ToggleShowUserName