import { connect } from 'react-redux';

import { User } from './User';
import { Login } from './Login';
import { UserList } from './UserList';
import { setUser, getUsers } from './store';

import './app.component.scss';

export const AppComponent = ({ user, users, logout, getUsers }) => (
  <React.Fragment>
    <h1>Simple react app</h1>

    {
      user ?
        <User
          data={user}
          login={logout}
        /> :
        <Login />
    }

    <div className="user-box">
      <br/>
      <button onClick={getUsers}>Get users</button>
      {
        !!users.length && <UserList users={users} />
      }
    </div>
    <img src="images/octocat.jpg" alt="img"/>
  </React.Fragment>
);

const mapStoreToState = ({ user, users }) => ({ user, users });
const mapDispatchToProps = dispatch => ({
  logout() { dispatch(setUser(null)); },
  getUsers() { dispatch(getUsers()) }
});

export const App = connect(mapStoreToState, mapDispatchToProps)(AppComponent);
