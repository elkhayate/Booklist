import React from 'react';
import BookContextProvider from './contexts/BookContext';
import "./App.css";
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import BookList from './components/BookList';

function App() {
  return(
    <div className="App">
      <ThemeContextProvider>
      <BookContextProvider>
        <Navbar />
        <BookList />
      </BookContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App;