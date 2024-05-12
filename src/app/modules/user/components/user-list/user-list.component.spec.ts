import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { UserListComponent } from './user-list.component';
import { selectAllUsers, selectUserError, selectUserIsLoading } from '../../store/user.selectors';
import { User } from '../../models/user';
import { AppState } from '../../../../app.stete';
import { GetUsers } from '../../store/user.actions';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let store: MockStore<AppState>;
  let mockUsers: User[];
  let mockError: string | null;

  beforeEach(async () => {
    mockUsers = [
      { id: 1, company: { bs: 'Sample BS' } },
      { id: 2, company: { bs: 'Another BS' } },
    ];
    mockError = null;

    await TestBed.configureTestingModule({
      imports: [UserListComponent],
      providers: [
        provideRouter([]),
        provideMockStore({
          selectors: [
            { selector: selectAllUsers, value: mockUsers },
            { selector: selectUserIsLoading, value: false },
            { selector: selectUserError, value: mockError },
          ],
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch GetUsers action on ngOnInit', () => {
    const spy = spyOn(store, 'dispatch').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith(GetUsers());
  });

  it('should dispatch GetUserDetails action on fetchUsers', () => {
    const spy = spyOn(store, 'dispatch').and.callThrough();
    component.fetchUsers();
    expect(spy).toHaveBeenCalledWith(GetUsers());
  })

  it('should filter users based on search input', () => {
    component.searchInput = 'sample';
    component.onSearchInputChange();
    component.filteredUsers$.subscribe((users) => {
      expect(users.length).toBe(1);
      expect(users[0].company?.bs).toBe('Sample BS');
    });
  });

  it('should hide toast on onToastClose', () => {
    component.onToastClose();
    expect(component.isShowToast).toBe(false);
  });

  it('should render user list', () => {
    const userElement = fixture.debugElement.query(By.css('.user-list'));
    expect(userElement).toBeTruthy();
  })

  it('should render error message when error is not null', () => {
    component.errorMessage = 'Some error message';
    component.isShowToast = true;
    fixture.detectChanges();
    const errorElement = fixture.debugElement.query(By.css('.toast'));
    expect(errorElement).toBeTruthy();
  });
});