import React from 'react';

import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import GitHubSubmission from './Pages/GitHubSubmission';
import Contacts from './Pages/Contacts';

function App() {
  return (
    <>
      <Home />
      <About/>
      <Skills/>
      <Projects/>
      <GitHubSubmission/>
      <Contacts/>
      <Navbar />
    </>
  );
}

export default App;