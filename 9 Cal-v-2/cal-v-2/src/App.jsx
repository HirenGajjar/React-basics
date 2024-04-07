import { useState } from 'react'
import styles from './App.module.css';
import Display from './Components/Display';
import ButtonCont from './Components/ButtonCont';

function App() {
  let [calVal,setCalVal]=useState("");

  const buttons = ['0','1','2','3','4','5','6','7','8','9','C','+','-','/','*','=','.'];
const onBtnClicked =(buttons)=>{
  
  if(buttons === "C" || buttons === 'c')
  {
    setCalVal("");
  }
  else if (buttons === '='){
      const result = eval(calVal);
      setCalVal(result);
  }
  else{
    let newDisVal = calVal + buttons;
    setCalVal(newDisVal);
  }
}
  return (
    <>
      <div  className ={styles.calculator}>
          <Display calVal = {calVal}/>
          <ButtonCont buttons={buttons}
          onBtnClicked={onBtnClicked}
          />
      </div>
    </>
  )
}

export default App
