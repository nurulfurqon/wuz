import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: async () => (await import("./components/user-list/user-list.component")).UserListComponent
  },
  {
    path: ":username",
    loadComponent: async () => (await import("./components/user-detail/user-detail.component")).UserDetailComponent
  }
]
