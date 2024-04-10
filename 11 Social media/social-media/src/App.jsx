import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import CreatePost from './Components/CreatePost';
import PostList from './Components/PostList';
import Post from './Components/Post';
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className='appContainer'>
     <Sidebar/>
      <div className='content'>
      <Header/>
      <CreatePost/>
      <PostList/>
      <Footer/>
      
     </div>
     </div>
  </>
  )
}

export default App
