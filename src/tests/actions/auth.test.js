import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    login,
    logout 
   } from '../../actions/auth';

test('should setup action object for login', () => {
    const loginTag = '123';
    const action = login(loginTag);
    expect(action).toEqual({
      type: 'LOGIN',
      uid: loginTag
    });
  });

test('should setup action object for logout', () => {
    const action = logout();
    expect(action).toEqual({
      type: 'LOGOUT'
    });
  });
  