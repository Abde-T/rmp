import Mainpage from "./pages/Mainpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/HomePage";
import Auth from "./Home page components/Auth/Auth";

function App() {
  AOS.init();

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
  );
}

export default App;
