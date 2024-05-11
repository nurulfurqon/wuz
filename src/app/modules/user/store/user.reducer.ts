import { createReducer, on } from "@ngrx/store";
import { GetUsers, GetUsersSuccess, GetUsersFailure, GetUserDetails, GetUserDetailsSuccess, GetUserDetailsFailure } from "./user.actions";
import type { User } from "../models/user";

export const initialUserState: User[] = [];
export const initialUserDetailsState: User = {} as User

export const UsersReducer = createReducer(
  initialUserState,
  on(GetUsers, (state: User[]): User[] => state),
  on(GetUsersSuccess, (state: User[], { users }): User[] => [...users]),
  on(GetUsersFailure, (state: User[], { error }): User[] => {
    console.error(error);
    return state
  })
)

export const UserDetailsReducer = createReducer(
  initialUserDetailsState,
  on(GetUserDetails, (state: User): User => state),
  on(GetUserDetailsSuccess, (state: User, { user }): User => user),
  on(GetUserDetailsFailure, (state: User, { error }): User => {
    console.error(error);
    return state
  })
)
