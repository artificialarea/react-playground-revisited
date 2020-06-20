This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Button UI Test
src: https://github.com/Thinkful-Ed/react-button-click-test-challenge/tree/solution

## Task

00. **branch** t1-shallow-testing-v00-init before proceeding

1. "Complete the test in src/components/button.test.js to assert that the onClick callback is fired when the button is clicked."


## Misc

* on testing...
  * https://courses.thinkful.com/react-v1/checkpoint/8
  * https://courses.thinkful.com/react-v1/checkpoint/10

* prerequisites to use enzyme (already done for init template)
  * `$ npm install enzyme enzyme-adapter-react-16 --save-dev`
  * configure ./src/setupTests.js:
```
      import { configure } from 'enzyme';
      import Adapter from 'enzyme-adapter-react-16';
      configure({ adapter: new Adapter() });
```
  * `$ npm install enzyme-to-json --save-dev`


* excercise requires **Jest mock functions**: 
  * in particular: https://jestjs.io/docs/en/jest-object.html#jestfnimplementation
  * https://jestjs.io/docs/en/mock-functions.html

