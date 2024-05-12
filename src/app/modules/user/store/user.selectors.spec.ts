import { selectUsers, selectUser, selectAllUsers, selectUserIsLoading, selectUserError, selectUserDetails, selectUserDetailsIsLoading, selectUserDetailsError } from './user.selectors';

describe('Selectors', () => {
  const mockState = {
    users: {
      users: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
      ],
      isLoading: false,
      error: null,
    },
    user: {
      user: { id: 1, name: 'John' },
      isLoading: true,
      error: 'Unable to fetch user details',
    },
  };


  it('should select users state', () => {
    const result = selectUsers(mockState);
    expect(result).toEqual(mockState.users);
  });

  it('should select user state', () => {
    const result = selectUser(mockState);
    expect(result).toEqual(mockState.user);
  });

  it('should select all users', () => {
    const result = selectAllUsers.projector(mockState.users);
    expect(result).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ]);
  });

  it('should select user loading state', () => {
    const result = selectUserIsLoading.projector(mockState.users);
    expect(result).toBeFalsy();
  });

  it('should select user error', () => {
    const result = selectUserError.projector(mockState.users);
    expect(result).toBeNull();
  });

  it('should select user details', () => {
    const result = selectUserDetails.projector(mockState.user);
    expect(result).toEqual({ id: 1, name: 'John' });
  });

  it('should select user details loading state', () => {
    const result = selectUserDetailsIsLoading.projector(mockState.user);
    expect(result).toBeTruthy();
  });

  it('should select user details error', () => {
    const result = selectUserDetailsError.projector(mockState.user);
    expect(result).toBe('Unable to fetch user details');
  });
});