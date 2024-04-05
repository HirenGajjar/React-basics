import FoodItems from './Components/FoodItems'
import ErrorMsg from './Components/ErrorMsg'
import Heading from './Components/Heading'

import "bootstrap/dist/css/bootstrap.min.css";

function App() {



   let food = ['a','b','c','d','e','h'];


  return (
    <>
     <Heading/>
     {
        <ErrorMsg food={food}/>
     }
      <FoodItems food={food}/>
    </>
  )
}

export default App
