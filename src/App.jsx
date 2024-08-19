import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Home from './Components/Home';
import ContactForm from './Components/ContactForm';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';

function App() {
  const ScrollToSection = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const sectionId = location.hash.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);

    return null;
  };
  return (
    <>
      <Router basename='/'>
        <Navbar />
        <div className="body_container">
          {/* <Home /> */}
          {/* <ContactForm /> */}
          <ScrollToSection />
          <Routes>
            <Route exact path="/" element={
              <Home />
            } />
            <Route exact path="/contact" element={
              <ContactForm />
            } />

          </Routes>

          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
