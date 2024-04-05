# React-basics

This is a repository for practicing react.

###### https://www.youtube.com/watch?v=eILUmCJhl64&ab_channel=KGCodingbyPrashantSir

### Why React ?

- React is a library created by fb Meta
- UI can be Interactive and Dynamic
- Single page Applications (SPA)
- When we request to browser :- DOM Elements tree (HTML) + CSS Style of each element + JS Helps modify DOM Based on user interactions
- Working on DOM and JS on a large scale can be complicated

- The mental modal of JS can be too complex
- JS can be cumbersome (large, heavy and difficult), Error-prone, Difficult to maintain **_ (building is less difficult then maintain it) _**
- JS is imperative - step to step process to build [write HTML elements, Add style and then select them using JS and manipulate]

- React takes care of creation and DOM manipulation, and querying and saves time
- Creates small and reusable **_components_**
- React is declarative - [write initial state and desire state :- DOM Manipulation will be taken care ]

### Components in react

- A web page is combination of small chunks of reusable code blocks
- App components is root, holding all components together

### Create react app

- packet.json is meta data
- .js [general script, logic] vs .jsx [js XML]

### Create react component

- components is js function
- export default App
- We define component as a function called functional components
- Functional components are initially stateless
- How jsx works can be understand using https://www.babeljs.io/repl
- export enables the use of components to other parts of app
- default export :- allows single default export
- named export :- allows multiple exports
- combined export :- export + default exports based on requirements
- jsx function names must starts with capital case

- Modularity :- ability to separate and recombine components
- Consistency :- Use of components ensures the UI is consistence
- Efficiency :- Reduce duplication of code and saves time
- Maintainability :- Easy to debug and update or to make change

### Bootstrap

- A free, open source front-end development framework
- Mobile first, Responsive

### Objects

- Objects are not valid as a react child, so in currentTime instead passing the new variable 'time', we need to convert into the string using toLocalDateString().

### Fragments

-