
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface UserState {
    showUserName: boolean;
}

export const initialState: UserState = {
    showUserName: true
}

const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getShowUserName = createSelector(
    getUserFeatureState,
    state => state.showUserName
)