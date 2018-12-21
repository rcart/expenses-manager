import React from 'react';
import { shallow } from '../enzyme';

import Modal from './Modal';

describe('Modal test', () => {
  it('renders Modal component', () => {
    const wrapper = shallow(<Modal />);

    expect(wrapper.exists()).toBe(true);
  });
});
