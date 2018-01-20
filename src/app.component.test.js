import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AppComponent } from './app.component';

configure({ adapter: new Adapter() });

describe('AppComponent', () => {
  it('should create AppComponent', () => {
    const wrapper = shallow(<AppComponent />);
    expect(wrapper.find('h1').length).toBe(1);
  });
});
