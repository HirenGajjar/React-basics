import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className='appContainer'>
     <Sidebar/>
      <div className='content'>
      <Header/>
      <Footer/>
      
     </div>
     </div>
  </>
  )
}

export default App
