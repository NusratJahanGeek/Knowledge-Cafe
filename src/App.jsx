import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import { useState } from 'react'

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
    </div>
  )
}

export default App
