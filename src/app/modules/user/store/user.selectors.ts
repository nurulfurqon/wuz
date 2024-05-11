import { createSelector } from "@ngrx/store";
import { AppState } from "../../../app.stete";

export const selectUsers = (state: AppState) => state.users
export const selectUser = (state: AppState) => state.user

export const selectAllUsers = createSelector(
  selectUsers,
  (state) => state.users
)
export const selectUserIsLoading = createSelector(
  selectUsers,
  (state) => state.isLoading
)
export const selectUserError = createSelector(
  selectUsers,
  (state) => state.error
)

export const selectUserDetails = createSelector(
  selectUser,
  (state) => state.user
)
export const selectUserDetailsIsLoading = createSelector(
  selectUser,
  (state) => state.isLoading
)
export const selectUserDetailsError = createSelector(
  selectUser,
  (state) => state.error
)
