import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
import { User } from '../../models/user';
import { GetUserDetails } from '../../store/user.actions';
import { selectUserDetails } from '../../store/user.selectors';
import { AppState } from '../../../../app.stete';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {

  private readonly store: Store<AppState> = inject(Store);

  constructor(
    private readonly route: ActivatedRoute
  ) {}

  readonly user$: Observable<User> = this.store.select(selectUserDetails)
  userDetails: User | null = null;

  public fetchUser() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.store.dispatch(GetUserDetails({ id: Number(id) }));
      this.user$.subscribe(user => {
        this.userDetails = user
      })
    }
  }

  ngOnInit(): void {
    this.fetchUser()
  }
}
