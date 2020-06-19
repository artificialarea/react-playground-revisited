This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Stateful vs Stateless Components + Props

## Tasks

0. Branch off **m1-stateful-v00-alt-init** template.

1. Composition: have have a **stateful** (App.js) and an embedded **stateless** (Button.js) component that interact with each other via **props**.

2. Clicking on a 'like' button will update state and adjust the display in App:
  * toggles between 👍 and 👎 emojis
  * updates a click counter every time the button is clicked, displaying total amounts clicked.
  * pass the text 'like?' as a prop to button

3. **Stretch Tasks** 
  * toggle text in button between contextual 'like' and 'dislike' states, too.
  * **defaultProps** and **propTypes** for props in Button.js

<br />

## Attributes of Stateful vs Stateless
* src: https://github.com/mariusbanea/web-developers-toolkit/blob/master/react/react-staless-vs-stateful-components.js

**STATEFUL COMPONENT**
- Internal State
- Component Lifecycle Hooks

Useful when...
- We need to have an internal state
- We need to perform an action when the component is mounted

- When you need internal state:
  - D3 graph (data visualisations) https://d3js.org/

- When you need to utilize a Component Hook:
  - AJAX request on mount
    - Setup animations
    - Access the raw DOM node for a 3rd party library

_versus_

**STATELESS COMPONENT**
- Used in most instances of a component
- Simple.
- Given some state (as props)... return some DOM (or additonal components)
- Pure

< br/>
