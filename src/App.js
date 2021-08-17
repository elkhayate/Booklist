import React from 'react';
import BookContextProvider from './contexts/BookContext';
import "./App.css";
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
function App() {
  return(
    <div className="App">
      <ThemeContextProvider>
      <BookContextProvider>
        
        <Navbar />
        
     
      </BookContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App;