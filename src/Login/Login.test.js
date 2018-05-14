import { shallow } from 'enzyme';
import { LoginComponent } from './Login';
import { setUser } from '../store';

describe('Login', () => {
  it('should create Login', () => {
    const wrapper = shallow(<LoginComponent />);
    expect(wrapper.find('form').length).toBe(1);
  });

  it('should call dispatch on form submit', () => {
    const fakeDispatch = jest.fn();
    const wrapper = shallow(<LoginComponent dispatch={fakeDispatch} />);
    const event = {
      target: {name: {value: ''} },
      preventDefault: _ => _
    };

    wrapper.find('form').simulate('submit', event);
    expect(fakeDispatch).toHaveBeenCalled();
  });

  it('should call dispatch() on form submit with arguments', () => {
    const event = {
      target: {name: {value: 'test'} },
      preventDefault: _ => _
    };
    const user = { name: event.target.name.value };
    const action = setUser(user)
    const fakeDispatch = jest.fn().mockReturnValue(action);
    const wrapper = shallow(<LoginComponent dispatch={fakeDispatch} />);

    wrapper.find('form').simulate('submit', event);
    expect(fakeDispatch).toHaveBeenCalledWith(action);
  });
});
