import { User } from "./modules/user/models/user";

export interface AppState {
  readonly users: User[]
  readonly user: User
}