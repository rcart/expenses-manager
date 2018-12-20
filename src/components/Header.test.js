import React from 'react';
import { shallow } from '../enzyme';

import Header from './Header';

describe('Header test', () => {

  it('renders Header component', () => {
    const title = 'Test';
    const wrapper = shallow(<Header title={title} />);

    // Expect the wrapper to be rendered
    expect(wrapper.exists()).toBe(true);
  });

  it('adds the title as <h1>', () => {
    const title = 'Test';
    const wrapper = shallow(<Header title={title} />);

    // Here I make sure that title is correctly passed to h1
    expect(wrapper.find('h1').contains(title)).toBe(true);
  });
});
