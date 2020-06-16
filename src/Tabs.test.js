import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'; // NOTE: requires configuration set up in setupTests.js
import Tabs from './Tabs';
import tabstore from './tabstore';

describe('<Tabs />', () => {

  // mimicing state from App.js
  const tabsProp = [ ...tabstore ] 

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Tabs />, div)
    ReactDOM.unmountComponentAtNode(div)
  });

  // Unfortunately, can't sufficiently test event listeners with 'react-test-renderer'. Need to use 'Enzyme' testing library.
  it('renders UI as expected', () => {
    const tree = renderer
      .create(<Tabs tabs={tabsProp}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // ENZYME testing of event handlers
  // NOTE: requires configuration set up in setupTests.js
  it('renders empty given no tabs', () => {

  })

});