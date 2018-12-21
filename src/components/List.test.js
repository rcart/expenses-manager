import React from 'react';
import { shallow } from '../enzyme';

import List from './List';

describe('List test', () => {
  it('renders List component', () => {
    const wrapper = shallow(<List />);

    expect(wrapper.exists()).toBe(true);
  });
});
