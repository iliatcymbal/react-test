import { User } from './User';
import { Login } from './Login';
import { UserList } from './UserList';
import { fetchUsers } from './services';

import './app.component.scss';

export class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      users: []
    };
    this.setUser = this.setUser.bind(this);
  }

  setUser(user) {
    this.setState({
      user
    });
  }

  getUsers() {
    fetchUsers()
      .then(users => this.setState({ users }));
  }

  render() {
    const { user, users } = this.state;

    return (
      <React.Fragment>
        <h1>Simple react app</h1>

        {
          user ?
            <User
              data={user}
              login={this.setUser}
            /> :
            <Login login={this.setUser}/>
        }

        <div className="user-box">
          <br/>
          <button onClick={() => this.getUsers()}>Get users</button>
          {
            !!users.length && <UserList users={users} />
          }
        </div>
        <img src="images/octocat.jpg" alt="img"/>
      </React.Fragment>
    );
  }
}
