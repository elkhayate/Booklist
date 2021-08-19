import React from 'react';
import BookContextProvider from './contexts/BookContext';
import "./App.css";
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import BookList from './components/BookList';
import BookForm from './components/BookForm';


function App() {
  return(
    <div className="App">
      <ThemeContextProvider>
      <BookContextProvider>
        <Navbar />
        <BookForm />
        <BookList />
      </BookContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App;