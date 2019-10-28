import React from 'react';
import { shallow, configure } from 'enzyme';
import { App } from './App';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('Testa <App />', () => {
  it('Deve renderizar <App /> snapshot', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});