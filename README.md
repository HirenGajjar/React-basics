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

- A function only can return a one single element, therefore using either wrapper div or fragments
- The major disadvantage of using wrapper div, an extra div makes extra level to DOM Tree
- Therefore using fragments instead of wrapper div it is better, as it does not add an extra node in DOM.

```Javascript

<React.Fragment></React.Fragment>
<></>

```

### Map Method

- convert one type of array with some calculation to another one
- Transform array element into the JSX

### Key prop

- React saves the updates and re-renders them at once lowering the number of reloading, therefore it is good practice while rendering large number of data mainly arrays or API Calls with each item having a unique key value, which ensures the react to only update the new elements or items or only those who have updates, and rest of the items do not get re-render, and this all is possible because of unique key

### Conditional Rendering

- if else / Ternary ?: / logical operators && ||
- Enhance User experience
- reduce unnecessary rendering

### Passing data via props (properties)

- parse only from parent to child (downwards flow - one way data flow)
- props are immutable

### Calculator version 1

### Passing children

- Children is special type of props that allows passing an element or elements into components
- The best use case of Children Props is having a code for container and passing it, and passing all other components inside it as a children props, and can be nested too.

### Handling Events

- camelCase (onClick)
- React creates synthetic events and not normal browser events, because it can be developed on any environment like node, native or IOS (watch 5:00:00 5:25:00)

### Passing function via props

- It is important to note that, in case of react it is easy to communicate from parent to child, however it can be tricky to communicate from child to parent, therefore use of functions as a props are important
- Parent defines the function and child invokes it
- It is good practice to keep the main business logic at parent and let child (small scaled components) only handle UI changes

### Managing Stats

- The default nature of any functional component is stateless, therefore between repainting cycles of DOM there is nothing that holds previous value of components, as props are immutable and on every change function get called and get reset, that is the reason we need states
- state represent data that changes over the time
- **_ STATE IS LOCAL AND PRIVATE TO THE COMPONENT _**
- state change causes the component re-rendering
- states are controlled by hooks (Hooks are react components, design and develop to control states)

### useState (6:00:00-6:15:00)

- useState has two things 1. a current value and a 2.function
- It is better to create new array which will take values from current array using spread operator and add new element, instead of directly pushing new element into the original array for immutability

```javascript
let textStateArr = useState();
let textStateVAl = textStateArr[0]; // Current value
let setTextStateMethod = textStateArr[1]; // method
```

- It is better to save state as low as possible as it reduces the re-rendering of whole tree, at the same time it is also important to understand that siblings can't share the state, so the state being shared in all the element should have one common parent which manages the state.

### State vs Props

- State is local and mutable data within the components
- Initialized with the component
- Can change the over the time and cause the re-render on update
- manage using useState hook

- Props are passed through parent to child and are immutable
- Allows communication between parent to child
- Change in props can cause the re-rendering
