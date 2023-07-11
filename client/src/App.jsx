import Mainpage from "./pages/Mainpage";
import { BrowserRouter as Router, Routes, Route, redirect } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/HomePage";
import Auth from "./Home page components/Auth/Auth";
import PostDetails from "./pages/PostDetails";

function App() {
  AOS.init();

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          {/* <Route path="/" element={()=> redirect ('/posts')} /> */}
          <Route path="/posts" element={<HomePage/>} />
          <Route path="/posts/search" element={<HomePage/>} />
          <Route path="/posts/:id" element={<PostDetails/>} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
  );
}

export default App;
