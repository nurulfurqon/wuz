import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { UserDetailComponent } from './user-detail.component';
import { selectUserDetails, selectUserDetailsIsLoading, selectUserDetailsError } from '../../store/user.selectors';
import { User } from '../../models/user';
import { AppState } from '../../../../app.stete';
import { GetUserDetails } from '../../store/user.actions';
import { provideRouter, ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;
  let store: MockStore<AppState>;
  let mockUser: User;
  let mockError: string | null;

  beforeEach(async () => {
    mockUser = { id: 1, name: 'Test User' };
    mockError = null;

    await TestBed.configureTestingModule({
      imports: [UserDetailComponent],
      providers: [
        provideRouter([]),
        provideMockStore({
          selectors: [
            { selector: selectUserDetails, value: mockUser },
            { selector: selectUserDetailsIsLoading, value: false },
            { selector: selectUserDetailsError, value: mockError },
          ]
        })
      ]
    })
    .compileComponents();

    TestBed.inject(ActivatedRoute).snapshot.params = { id: '1' };

    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch GetUserDetails action on ngOnInit', () => {
    const spy = spyOn(store, 'dispatch').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith(GetUserDetails({ id: 1 }));
  })

  it('should dispatch GetUserDetails action on fetchUser', () => {
    const spy = spyOn(store, 'dispatch').and.callThrough();
    component.fetchUser();
    expect(spy).toHaveBeenCalledWith(GetUserDetails({ id: 1 }));
  });

  it('should hide toast on onToastClose', () => {
    component.onToastClose();
    expect(component.isShowToast).toBe(false);
  });

  it('should render user details', () => {
    const userElement = fixture.debugElement.query(By.css('.user-details'));
    expect(userElement).toBeTruthy();
  });

  it('should render error message when error is not null', () => {
    component.errorMessage = 'Some error message';
    component.isShowToast = true;
    fixture.detectChanges();
    const errorElement = fixture.debugElement.query(By.css('.toast'));
    expect(errorElement).toBeTruthy();
  });
});
