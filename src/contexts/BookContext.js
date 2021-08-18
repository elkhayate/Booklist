import React,{createContext,useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

function BookContextProvider(props) {
    const [books, setBooks] = useState([
        {title : "The subtle art of not giving a fuck", author : "Mark Manson", id : 1},
        {title : "Everything is fucked", author : "Mark Manson", id : 2}
    ])
    const addBook = (title,author) => {
        const item = {title,author, id : uuidv4()}
        setBooks([...books, item])    
    }
    const rmBook = (id) => {
        return setBooks(
            books.filter(book => book.id !== id)
        )
    }

    return(
        <BookContext.Provider value={{books, addBook, rmBook}}>
            {props.children}
        </BookContext.Provider>
    )
}


export default BookContextProvider;