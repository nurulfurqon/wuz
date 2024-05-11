import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { OnInit } from '@angular/core';
import { User } from '../../models/user';
import { GetUsers } from '../../store/user.actions';
import { selectAllUsers } from '../../store/user.selectors';
import { AppState } from '../../../../app.stete';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  private readonly store: Store<AppState> = inject(Store);

  readonly users$: Observable<User[]> = this.store.select(selectAllUsers)
  public filteredUsers$: Observable<User[]>;

  searchInput: string = '';

  constructor() {
    this.filteredUsers$ = this.users$
  }

  /**
   * Dispatches an action to get users with an empty user array payload.
   *
   * @return {void} No return value
   */
  public fetchUsers() {
    this.store.dispatch(GetUsers());
  }

  onSearchInputChange() {
    this.filteredUsers$ = this.users$.pipe(
      map((users) => {
        return users.filter((user) =>
          user.company?.bs?.toLowerCase().includes(this.searchInput.toLowerCase())
        );
      })
    );
  }

  ngOnInit(): void {
    this.fetchUsers()
  }
}
