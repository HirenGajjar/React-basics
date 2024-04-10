import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Sidebar/>
     <Header/>
     <Footer/>
  </>
  )
}

export default App
