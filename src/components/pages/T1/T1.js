import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './T1.css';
import Dropdown from '../../Dropdown'



const T1 = () => {
    const t1Links = document.getElementsByClassName('t1-links');  
    
    const clickHandler = (e) => {
        
        for (let i = 0; i < t1Links.length; i++) {
            t1Links[i].classList.remove("clicked");
        }
        
            e.target.classList.add("clicked");
            

        
        
    }
    
    
    const init= () => {
        
        for (let i = 0; i < t1Links.length; i++) {
        t1Links[i].addEventListener("click", clickHandler);
        }
    }

    

    return(
    <>
        
        <nav>
            <Link to='roster' onClick={init} className='t1-links' >ROSTER</Link>
            <Link to='schedule' onClick={init} className='t1-links '>SCHEDULE</Link>
            <Link to='news' onClick={init} className='t1-links'>NEWS</Link>
            <Link to='community' onClick={init} className='t1-links'>COMMUNITY</Link>
            <Link to='history' onClick={init} className='t1-links'>HISTORY</Link>
            <Link to='careers' onClick={init} className='t1-links'>CAREERS</Link>
            
        
        </nav>    
        <Outlet />
        
    
    </>
    )
};




export default T1;