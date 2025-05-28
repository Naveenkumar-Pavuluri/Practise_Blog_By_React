import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Form.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Blogs from "./components/Blogs.jsx"; 
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx"; 

const App = () => {
  return (
    <Router >
      <Header /> 
      <Routes>
        <Route path="/" element={<Form />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/blogs" element={<Blogs />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;