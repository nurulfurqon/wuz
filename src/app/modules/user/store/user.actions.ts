import { createAction, props } from "@ngrx/store";
import { User } from "../models/user";

export const GetUsers = createAction('[User] Get Users');
export const GetUsersSuccess = createAction('[User] Get Users Successfuly', props<{ users: User[] }>());
export const GetUsersFailure = createAction('[User] Get Users Failure', props<{ error: string }>());

export const GetUserDetails = createAction('[User] Get User Details', props<{ id: number }>())
export const GetUserDetailsSuccess = createAction('[User] Get User Details Successfuly', props<{ user: User }>())
export const GetUserDetailsFailure = createAction('[User] Get User Details Failure', props<{ error: string }>())
