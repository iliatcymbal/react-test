import { getUsers } from './userSagas';
import { setUsers } from '../actions';
import { put } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';

const user = { name: 'John' };
const mockUsers = [user, user];
jest.mock('../../services/users', () => ({
    fetchUsers: () => mockUsers
  })
);

describe('userSagas', () => {


  it('should send users to store', () => {
    const it = getUsers();
    const fetchedUsers = it.next().value;

    expect(fetchedUsers).toEqual(mockUsers);
    expect(it.next(fetchedUsers).value).toEqual(put(setUsers(fetchedUsers)));
  });

  it('should send users to store [another way to test saga]', async () => {
   let action;

   runSaga({
     subscribe: (s) => () => s,
     dispatch: data => action = data
   }, getUsers);

   expect(action.data).toEqual(mockUsers);
  });
});
