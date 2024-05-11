import { createReducer, on } from "@ngrx/store";
import * as userActions from "./user.actions";
import type { UserState, UserDetailState } from "../models/user";

export const initialUserState: UserState = {
  isLoading: false,
  users: [],
  error: null
};
export const initialUserDetailsState: UserDetailState = {
  isLoading: false,
  user: null,
  error: null
}

export const UsersReducer = createReducer(
  initialUserState,
  on(userActions.GetUsers, (state): UserState => ({...state, isLoading: true})),
  on(userActions.GetUsersSuccess, (state, { users }): UserState => ({...state, isLoading: false, users})),
  on(userActions.GetUsersFailure, (state, { error }): UserState => ({...state, isLoading: false, error})),
)

export const UserDetailsReducer = createReducer(
  initialUserDetailsState,
  on(userActions.GetUserDetails, (state): UserDetailState => ({...state, isLoading: true})),
  on(userActions.GetUserDetailsSuccess, (state, { user }): UserDetailState => ({...state, isLoading: false, user})),
  on(userActions.GetUserDetailsFailure, (state, { error }): UserDetailState => ({...state, isLoading: false, error})),
)
