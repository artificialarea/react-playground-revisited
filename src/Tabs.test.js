import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'; // NOTE: requires configuration set up in setupTests.js
import toJson from 'enzyme-to-json'; // NOTE: req. $ npm install enzyme-to-json --save-dev
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

  // ENZYME "shallow" snapshot testing of event handlers
  // NOTE: requires
  // [1] install + configuration set up in setupTests.js
  // [2] $ npm install enzyme-to-json --save-dev
  it('renders empty given no tabs', () => {
    const wrapper = shallow(<Tabs />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('opens first clicked tab, which then closes when another tab clicked', () => {
    const wrapper = shallow(<Tabs tabs={tabsProp}/>)
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()

    // console.log('>>> WRAPPER <<<')
    // console.log(wrapper.debug())
    // console.log('>>> FIND(BUTTON) <<<')
    // console.log(wrapper.find('button').at(1).debug())
  });

});