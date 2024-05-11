import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  @Input() message: string = '';
  @Input() isShow: boolean = false;
  @Output() toastClose = new EventEmitter<void>();

  closeToast() {
    this.toastClose.emit();
  }
}
