import React from 'react';
import { shallow } from '../enzyme';

import App from './App';

describe('App test', () => {
  it('renders App component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });
});
