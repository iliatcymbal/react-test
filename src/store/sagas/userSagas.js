import { takeEvery, put } from 'redux-saga/effects';

import {
  GET_USERS_ASYNC,
  setUsers
} from '../actions';
import {
  fetchUsers
} from '../../services';

export function* getUsers() {
  try {
    const users = yield fetchUsers();
    yield put(setUsers(users));
  } catch (err) {}
}

export function* watchUser() {
  yield takeEvery(GET_USERS_ASYNC, getUsers);
}
