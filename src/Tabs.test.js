import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';

describe('<Tabs />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Tabs />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
});