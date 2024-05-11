import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { UsersReducer, UserDetailsReducer } from './modules/user/store/user.reducer';
import { UserEffects } from './modules/user/store/user.effects';
import { AppState } from './app.stete';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideEffects([UserEffects]),
    provideStore<AppState>({
      users: UsersReducer,
      user: UserDetailsReducer
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient()]
};
