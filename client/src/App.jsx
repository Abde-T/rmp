import Mainpage from "./pages/Mainpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/HomePage";
import {useDispatch} from 'react-redux'
import { useEffect } from "react";
import {getPosts} from './actions/posts'

function App() {
  AOS.init();
  const dispatch =  useDispatch()

  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
