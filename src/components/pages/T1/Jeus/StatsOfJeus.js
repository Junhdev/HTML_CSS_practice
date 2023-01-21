import React, { useState, useEffect } from 'react'
import './designOfJeus.css';



function StatsOfJeus(props){
    
    
    return(
        <div className="back-card" >
            <button onClick={()=>{props.setClick1(false)}} className="bttn">버튼</button>
            <div className='stat'>성적</div>
        </div> 
    );
}

export default StatsOfJeus;