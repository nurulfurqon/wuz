import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
import { User } from '../../models/user';
import { GetUserDetails } from '../../store/user.actions';
import { selectUserDetails, selectUserDetailsIsLoading, selectUserDetailsError } from '../../store/user.selectors';
import { AppState } from '../../../../app.stete';
import { ToastComponent } from '../../../../shared/components/toast/toast.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [RouterLink, CommonModule, ToastComponent],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {

  private readonly store: Store<AppState> = inject(Store);

  readonly isLoading$: Observable<boolean> = this.store.select(selectUserDetailsIsLoading)
  readonly user$: Observable<User|null> = this.store.select(selectUserDetails)
  readonly error$: Observable<string|null> = this.store.select(selectUserDetailsError)

  isShowToast: boolean = false;
  errorMessage: string = '';

  constructor(
    private readonly route: ActivatedRoute
  ) {
    this.error$.subscribe((error) => {
      this.isShowToast = error ? true : false
      this.errorMessage = error || ''
    })
  }

  public fetchUser() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.store.dispatch(GetUserDetails({ id: Number(id) }));
    }
  }

  public onToastClose() {
    this.isShowToast = false
  }

  ngOnInit(): void {
    this.isShowToast = false
    this.errorMessage = ''
    this.fetchUser()
  }
}
