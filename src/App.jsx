import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [blogReadingTime, setBlogReadingTime] = useState("");
  const handleReadTime = (time) => {
    const previousReadTime = parseInt(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const sum = previousReadTime + parseInt(time);
      localStorage.setItem("readTime", sum);
      setBlogReadingTime(sum);
    }
    else{
      localStorage.setItem("readTime", time);
      setBlogReadingTime(parseInt(time));
    }
  }

  

  return (
    <div className="App">
      <Header></Header>
      <Blogs 
      handleReadTime={handleReadTime}
      blogReadingTime={blogReadingTime}
      ></Blogs>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
