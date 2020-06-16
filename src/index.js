import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './m-drill-1/App';

let mountNode = document.getElementById('root');

ReactDOM.render(
  <App />,
  // document.getElementById('root')
  mountNode 
);

// re: mountNode
// src: https://www.freecodecamp.org/news/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2/

// "The second argument to ReactDOM.render is the destination DOM element which React is going to take over and control. In the jsComplete React Playground, you can just use the special variable 'mountNode'."

// presumably their variable mountNode has been assigned document.getElementById('root') ??
