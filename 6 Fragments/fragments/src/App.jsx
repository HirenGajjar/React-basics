

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
let food = ['a','b','c','d','e'];
//let food =[];


if(food.length == 0){
  return <h3>Find something</h3>;
}
  return (
    <>
     <h1>Healthy food</h1>
     {
      food.length == 0  && <h2>Find something</h2>
     }
      <ul className="list-group">
            {  
                  food.map(item => <li key={item} className="list-group-item">{item}</li>)
            }
      </ul>
    </>
  )
}

export default App
