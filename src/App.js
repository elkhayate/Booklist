import React,{useContext} from 'react';
import BookContextProvider from './contexts/BookContext';
import "./App.css";
import Navbar from './components/Navbar';
import ThemeContextProvider, { ThemeContext } from './contexts/ThemeContext';
import BookList from './components/BookList';
import BookForm from './components/BookForm';


function App() {
  const {isLight , light, dark} = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  return(
    <div style={{backgroundColor: theme.bg}} className="App">
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