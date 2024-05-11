import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListLoadingComponent } from './user-list-loading.component';

describe('UserListLoadingComponent', () => {
  let component: UserListLoadingComponent;
  let fixture: ComponentFixture<UserListLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
