
import { UserState, initialState } from './user.state';
import { UserActions, UserActionTypes } from './user.action';

export function reducer(state = initialState, action: UserActions): UserState {

    switch(action.type) {

        case UserActionTypes.ToggleShowUserName : 
            return {
                ...state,
                showUserName: action.payload
            };
        
        default :
            return state;
    }
}