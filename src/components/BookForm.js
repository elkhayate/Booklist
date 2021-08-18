import React, {useContext, useState} from 'react';
import { BookContext } from '../contexts/BookContext';
import style from "./compo.module.css";
import { v4 as uuidv4 } from 'uuid';

function BookForm() {
    const {addBook} = useContext(BookContext);
    const [book, setBook] = useState({title : "", author : ""}
    )

    


    const handleSubmit = (e) => {
        e.preventDefault()
        const newBook = {...book , id : uuidv4()}
        addBook(newBook);
        setBook({title:"",author:""})
        
    }
    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <input  id = "title" type="text" name = "title"  value={book.title} placeholder="Title..." onChange={(e)=>{setBook({...book, title : e.target.value})}} />
            <input id="author"  type = "text" name = "author" value = {book.author} placeholder = "Author..." onChange={(e)=>{setBook({...book,author : e.target.value})}} />
            <button>Add</button>
        </form>
    )
} 

export default BookForm;
