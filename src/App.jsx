/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from "./components/header/header"
import Home from './components/Home/Home'
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Projects from "./components/Projects/Projects"
import Loader from "./components/Loader/Loader"
function App() {
  const [loading, setLoading] = useState(true);

  // Callback to hide loader when loading is complete
  const handleLoadingComplete = () => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }

  return (
  <div>
     <div>
    {loading ? (
      <Loader onLoadingComplete={handleLoadingComplete} />
    ) : (
      <>
        <Home/>
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
      </>
    )}
  </div>

  </div>
  )
}

export default App
