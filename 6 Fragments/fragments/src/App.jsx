import FoodItems from './Components/FoodItems'
import ErrorMsg from './Components/ErrorMsg'
import Heading from './Components/Heading'
import FoodInput from './Components/FoodInput'
import Container from './Components/Container'
import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
let [food,setFood]= useState([]);

const handleKeyDown =(e)=>{
  if(e.key === 'Enter'){
      let newFoodItem = e.target.value;
      e.target.value="";
      let newItems = [...food,newFoodItem];
      setFood(newItems);
  }
 }


  return (

    <Container>

      <Container>
     <Heading/>
     <FoodInput handleKeyDown={handleKeyDown}/>
     </Container>
     <Container>
     {
       <ErrorMsg food={food}/>

     }
     
      <FoodItems food={food} key={food}/>
      </Container>
    </Container>
  
  )
}

export default App
