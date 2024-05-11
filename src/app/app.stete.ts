import { UserDetailState, UserState } from "./modules/user/models/user";

export interface AppState {
  readonly users: UserState
  readonly user: UserDetailState
}