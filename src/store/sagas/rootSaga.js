import { all } from 'redux-saga/effects';

import {
  watchUser
} from './userSagas';

export function* rootSaga() {
  yield all([
    watchUser()
  ]);
}
