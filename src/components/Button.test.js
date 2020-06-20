import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('<Button />', () => {

    it('Should call props.onClick when the button is clicked', () => {
        const spy = jest.fn(); // jest mock functio
        const wrapper = shallow(<Button onClick={spy} />);
        wrapper.find('button').simulate('click');
        expect(spy).toHaveBeenCalled();
    });

});