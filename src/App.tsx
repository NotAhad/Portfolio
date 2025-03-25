import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Home/Home"
import { Projects } from "./Pages/Projects/Projects"
import Bento from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/about" element={<Bento/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
  );
};


export default App