import FoodItems from './Components/FoodItems'
import ErrorMsg from './Components/ErrorMsg'
import Heading from './Components/Heading'
import FoodInput from './Components/FoodInput'
import Container from './Components/Container'

import "bootstrap/dist/css/bootstrap.min.css";

function App() {



   let food = ['a','b','c','d','e','h'];


  return (

    <Container>

      <Container>
     <Heading/>
     <FoodInput/>
     </Container>
     <Container>
     {
       <ErrorMsg food={food}/>

     }
     
      <FoodItems food={food}/>
      </Container>
    </Container>
  
  )
}

export default App
