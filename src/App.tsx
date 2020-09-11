import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ModelosView from './views/ModelosView';

function App() {
  return (
    <div className="App mt-3">
      <Navigation />
      <ModelosView />
      <Footer></Footer>
    </div>
  );
}

export default App;
