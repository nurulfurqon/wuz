import { createSelector } from "@ngrx/store";
import { AppState } from "../../../app.stete";

export const selectUsers = (state: AppState) => state.users
export const selectUser = (state: AppState) => state.user

export const selectAllUsers = createSelector(
  selectUsers,
  (state) => state
)

export const selectUserDetails = createSelector(
  selectUser,
  (state) => state
)
