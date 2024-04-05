

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
let food = ['a','b','c','d','e'];

  return (
    <>
     <h1>Healthy food</h1>
      <ul className="list-group">
            { 
                  food.map(item => <li key={item} className="list-group-item">{item}</li>)
            }
      </ul>
    </>
  )
}

export default App
