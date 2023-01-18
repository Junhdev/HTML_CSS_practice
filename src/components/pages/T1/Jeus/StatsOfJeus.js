import React, { useState, useEffect } from 'react'
import './designOfJeus.css';



function StatsOfJeus(){
    const [click, setClick] = useState(false);
    
    return(
        <div className="back-card" >
            <button onClick={()=>{setClick(false)}} className="bttn">버튼</button>
            <div className='stat'>성적</div>
        </div> 
    );
}

export default StatsOfJeus;