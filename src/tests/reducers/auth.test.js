import authReducer from '../../reducers/auth';

test('should change the state to a logged in user', () => {
    const action = {
      type: 'LOGIN',
      uid: '123'
    };
    const state = authReducer({},action);
    expect(state).toEqual({uid:'123'});
  });

test('should change the state to logout', () => {
    const action = {
      type: 'LOGOUT'
    };
    const state = authReducer({uid: 'anything'},action);
    expect(state).toEqual({});
  });

