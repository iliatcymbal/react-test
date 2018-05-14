import { shallow } from 'enzyme';
import { AppComponent } from './app.component';
import { Login } from './Login';
import { User } from './User';
import { UserList } from './UserList';

const user = { name: 'John' };
const users = [user, user];

describe('AppComponent', () => {
  it('should create AppComponent', () => {
    const wrapper = shallow(<AppComponent users={[]} />);
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('should show Login component on null user', () => {
    const wrapper = shallow(<AppComponent users={[]} />);
    expect(wrapper.find(Login).length).toBe(1);
  });

  it('should show User component on non-null user', () => {
    const wrapper = shallow(<AppComponent users={users} />);
    wrapper.setProps({ user });
    expect(wrapper.find(User).length).toBe(1);
  });

  it('should not show "UserList" on emtpy users', () => {
    const wrapper = shallow(<AppComponent users={[]} />);
    expect(wrapper.find(UserList).length).toBe(0);
  });

  it('should set users in state on getUsers()', () => {
    const wrapper = shallow(<AppComponent users={[]} />);
    const getUsers = () => wrapper.setProps({ users });

    wrapper.setProps({ getUsers });
    wrapper.find('button').simulate('click');
    expect(wrapper.find(UserList).length).toBe(1);
  });

});
