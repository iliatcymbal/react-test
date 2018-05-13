import {
  SET_USER,
  SET_USERS,
  REMOVE_USER
} from './actions';

export const user = (state = null, { type, data }) => {
  switch (type) {
    case SET_USER: {
      return data;
    }

    case REMOVE_USER:
      return null;
  }

  return state;
};

export const users = (state = [], { type, data = [] }) => {
  switch (type) {
    case SET_USERS:
      return [... data];
  }

  return state;
};
