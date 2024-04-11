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

- ###### React is a JavaScript library that's used for building reactive websites. While it's not a framework, React does have a dedicated framework called Create React App that can be used to build web applications.

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

### React dev tools chrome extension

### How react works?

- index.html only has two html tags, one is div with an ID of 'root' (a div is non-semantic element which is generally used as an container and means nothing) and script linked to main.js
- main.js file generally contains all the dependencies being installed, by default it has React and React-DOM.
- using React-DOM it creates root inside div element using by ID 'root' and uses the render method

```javascript
ReactDOM.createRoot(document.getElementById("rood")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- In vanilla JavaScript code change in HTML will make entire DOM re-render and make page refreshed, whereas in react using virtual DOM, and using reconciliation, on every change it updates the V-DOM first, then it compares the previous and current state of V-DOM to identify all the nodes that need to be updated,once those nodes are updated it updates the DOM

- the react-DOM library and react are two separate library that functions simultaneously, more most part of work react is responsible except updating DOM where react-DOM comes into the picture, **_ the reason behind having react-DOM separately is because it can be use on cross platform development like android, ios and other web applications _**

### Library vs framework

- react is library whereas angular and vue are framework
- a framework provides a complete structure and tools for building an entire application, akin to having a full toolkit, while a library offers specific functionalities that can be integrated into an application, similar to having individual tools like a hammer or a screwdriver.

- library offers very specific functionality whereas framework has wide range of solution to build an application

### Using forms

- Button has by default type of "submit", @8:10:00
- preventDefault()

### useRef (8:16:00)

- while using the useState() hook, it allows to change the state of components but the problem over here was, it re-paints the V-DOM every time there is a change in state, so to overcome this issue react introduces the useRef() hook
- use with **ref** attribute

### update state using 1.spread operator(...) 2.using function (8:35:0)

- instead of directly using spread operator inside the useState method, it is better to pass it through a function which passes a current value

### Context API / React API (8:38:42)

- In complex applications, where many children share common state and props, to maintain such states and props eventually leads to reach all props and state handle by root element, therefore on every update all the props/state will pass through all intermediate child even though not all of them are using those props/states. This is know as a **Prop drilling** which sometime leads to prop pollution (In React, "props pollution" refers to a situation where unnecessary props are passed down through multiple layers of components, even though some intermediate components do not need them.)

- context API is shared storage among all the components

- use useState to get input, use Context API to that handles all the props and make it as an object so that it can take props and functions
- Also it is easy to make state and pass it to the context provider that all child can access as they want

### useReducer (9:15:00)

- offers more control on states then useState() hook
- useReducer takes 4 things 1.state 2.dispatch 3.reducer function 4.initial state
- it gives current state and dispatcher,

### Social media (9:46:0 to 10:42:0)

### DummyJSON

- fetch() returns promise
- default is GET and POST can be use
- .then() ,response.json()
- headers in API

### useEffect Hook (12:14:00)

### Loading indicator

### useEffect Hook clean up

### Strict Mode

- a tool for highlighting potential problems in an application
- StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.
- Strict mode checks are run in development mode only; they do not impact the production build.
