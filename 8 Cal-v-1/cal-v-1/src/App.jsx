import { useState } from 'react'
import styles from './App.module.css';
import Display from './Components/Display';
import ButtonCont from './Components/ButtonCont';

function App() {
  
  let buttons = ['0','1','2','3','4','5','6','7','8','9','C','AC','+','-','/','*','=','DEL','.'];

  return (
    <>
      <div  className ={styles.calculator}>
          <Display/>
          <ButtonCont buttons={buttons}/>
      </div>
    </>
  )
}

export default App
