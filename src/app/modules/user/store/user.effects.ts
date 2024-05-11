import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as userActions from "./user.actions";
import { UserService } from "../services/user.service";
import { mergeMap, map, catchError, of } from "rxjs";

@Injectable()

export class UserEffects {

  // Define an effect called getUsers$
  getUsers$ = createEffect(() => {
    return this.actions$.pipe( // Listen to actions
      ofType(userActions.GetUsers), // Filter the action to GetUsers
      mergeMap(() => this.userService.getUsers() // Call the userService to get users
        .pipe(
          map(users => userActions.GetUsersSuccess({ users })), // Dispatch GetUsersSuccess action with the retrieved users
          catchError(error => of(userActions.GetUsersFailure({ error: error.message }))) // Handle any errors by dispatching GetUsersFailure action
        ))
    );
  });

  // Define an effect called getUserDetails$
  getUserDetails$ = createEffect(() => {
    return this.actions$.pipe( // Listen to actions
      ofType(userActions.GetUserDetails), // Filter the action to GetUserDetails
      mergeMap((action) => this.userService.getUserDetails(action.id) // Call the userService to get user details
        .pipe(
          map(user => userActions.GetUserDetailsSuccess({ user })), // Dispatch GetUserDetailsSuccess action with the retrieved user details
          catchError(error => of(userActions.GetUserDetailsFailure({ error: error.message }))) // Handle any errors by dispatching GetUserDetailsFailure action
        ))
    );
  });
  /**
   * Constructor for the UserEffects class.
   *
   * @param {Actions} actions$ - The NgRx actions observable.
   * @param {UserService} userService - The service to interact with user data.
   */
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}