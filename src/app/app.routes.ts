import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadChildren: async () => (await import('./modules/user')).routes
  },
  { path: '**', redirectTo: '/' }
];
