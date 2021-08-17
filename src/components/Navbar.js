import React,{useContext} from 'react';
import style from "./compo.module.css";
import on from "../img/iconon.png";
import off from "../img/iconoff.png";
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';


export default function Navbar() {
    const {books} = useContext(BookContext);
    const {lighte, dark , light , toggler } = useContext(ThemeContext);
    const onOroff = lighte ? on : off;
    const Theme = lighte ? light : dark;
    
    return(
        <div  style={{ background : Theme.bg, color : Theme.syntax }} className={style.Navbar}>
            <div className={style.title}>
                <h1>Book</h1>
                <h1>List</h1>
            </div>
            {books.length ? <p className={style.reminder}>You have currently {books.length} books to read.</p> :
            <p className={style.reminder}>Say HI to free time no books to read !</p>}
            <div  className={style.toggler}>
                <img  style={{cursor:"pointer"}} onClick={()=>toggler()} src = {onOroff} alt="toggler"/>
            </div>
        </div>
    )
}