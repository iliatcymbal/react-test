import { shallow } from 'enzyme';
import { User } from './User';

describe('User', () => {
  it('should create User', () => {
    const wrapper = shallow(<User />);
    expect(wrapper.find('section').length).toBe(1);
  });

  it('should set default name', () => {
    const wrapper = shallow(<User />);
    expect(wrapper.find('h2').find('em').text()).toBe('John Smith');
  });
});
