import React,{createContext,useState} from 'react';


export const BookContext = createContext();

function BookContextProvider(props) {
    const [books, setBooks] = useState([
        {title : "The subtle art of not giving a fuck", author : "Mark Manson", id : 1},
        {title : "Everything is fucked", author : "Mark Manson", id : 2}
    ])
    const addBook = (item) => {
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