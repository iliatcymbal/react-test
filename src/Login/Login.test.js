import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Login } from './Login';

configure({ adapter: new Adapter() });

describe('Login', () => {
  it('should create AppComponent', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('form').length).toBe(1);
  });

  it('should call props.login() on form submit', () => {
    const fakeLogin = jest.fn();
    const wrapper = shallow(<Login login={fakeLogin} />);
    const event = {
      target: {name: {value: ''} },
      preventDefault: _ => _
    };

    wrapper.find('form').simulate('submit', event);
    expect(fakeLogin).toHaveBeenCalled();
  });

  it('should call props.login() on form submit with arguments', () => {
    const fakeLogin = jest.fn();
    const wrapper = shallow(<Login login={fakeLogin} />);
    const event = {
      target: {name: {value: 'test'} },
      preventDefault: _ => _
    };
    const user = { name: event.target.name.value };

    wrapper.find('form').simulate('submit', event);
    expect(fakeLogin).toHaveBeenCalledWith(user);
  });
});
