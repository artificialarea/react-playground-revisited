This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Stateful vs Stateless

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

## Notes to self

**marius-drill-1** branch exercise involved:
* "write a stateful / stateless component in react"
* src: https://github.com/mariusbanea/web-developers-toolkit/blob/master/react/react-staless-vs-stateful-components.js


* first-attempt: mimic marius example side-by-side
* notable things learned:
  * Use of the Understore (_) —— _toggleLikeState —— as an 'identifier', a programming convention frequently used to preface the name of an object's property or method that is *PRIVATE*.
  * 👍 : 👎 emoji's in JSX require quotes, like any other string. 
  * mountNode = document.getElementById('root')
  * using defaultProps without passing any props
  * reminder about installing/importing propTypes

