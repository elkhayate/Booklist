import React,{createContext,useState, useEffect} from 'react';


export const BookContext = createContext();

function BookContextProvider(props) {
    const local = () => {
        const localData = localStorage.getItem("books");
        return localData ? JSON.parse(localData) : [];
    }
    const [books, setBooks] = useState(local)
    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books))
    },[books])
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