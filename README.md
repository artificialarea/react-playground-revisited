This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Stateful vs Stateless Components

## Tasks

0. Branch off **m1-stateful-v00-init** template.

1. Have an app display a **stateful** and a **stateless** component (that are autonomous from each other).

2. For the stateless component, have it render 'Hello World' **(via defaultProps)**

3. For the stateful component, have a "like" button that:
  1. toggles between 👍 : 👎 emojis
  2. updates a counter every time the button is clicked.

4. **Stretch** add **propTypes** to a components to check their propertie(s).

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


