This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notes to self

**m3-router-v3** exercise involved:

## The task:
Edit the /src/App.js file to create a router (like the example one between lines 12 and 20), with this behaviour:
* when you visit http://localhost:3000/ you will see the __"Home"__ component
* when you visit http://localhost:3001/child you will see the __"Child"__ component
* when you visit http://localhost:3000/blah you will see the __"Error"__ component
* and the __"Navigation"__ component is visible in all 3 scenarios

## Stretch Tasks

1. Created a _*dynamic route*_ (and dynamic NavList) of several __"/child/:childId"__ components related to a store list of objects that have id/name and content associated with them.

2. Passed state into react router component via render props

3. Added react-router-dom Redirect logic in Child.js to redirect to Error.js if dynamic path is not valid '/child/:not-ChildId'.