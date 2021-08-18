import React,{useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

import style from "./compo.module.css";

function Book(props) {
    const {isLight, dark , light} = useContext(ThemeContext);
    const Theme = isLight ? light : dark;
    return (
        <div  className = {style.book}>
            <div style={{ background : Theme.bg, color : Theme.syntax }} onClick={props.remove} className={style.bookinfo} >
                <h2 >{props.title}</h2>
                <h3 >{props.author}</h3>
            </div>
            
        </div>
    )
}
export default Book;