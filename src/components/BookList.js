import React,{useContext} from 'react'
import { BookContext } from '../contexts/BookContext'
import Book from './Book';
 



function BookList() {
    const {books, rmBook} = useContext(BookContext);
    const Books = 
        books.map(book => 
            <Book remove = {() => rmBook(book.id)} key = {book.id} title = {book.title} author = {book.author} />)
    
    return(
        <div>
            {Books}
        </div>
    )
}

export default BookList;
