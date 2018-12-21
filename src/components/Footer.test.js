import React from 'react';
import { shallow } from '../enzyme';

import Footer from './Footer';

describe('Footer test', () => {
  it('render Footer component', () => {
    const wrapper = shallow(<Footer title="Test" showModal={function(){}} topValue={function(){}}/>);

    expect(wrapper.exists()).toBe(true);
  });
});
