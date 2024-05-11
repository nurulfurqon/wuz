import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list-loading',
  standalone: true,
  imports: [],
  templateUrl: './user-list-loading.component.html',
  styleUrl: './user-list-loading.component.scss'
})
export class UserListLoadingComponent {
  items: string[] = ['one', 'two', 'three', 'four', 'five', 'six'];
}
