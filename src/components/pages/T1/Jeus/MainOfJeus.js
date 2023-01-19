import React, { useState, useEffect } from 'react'
import './designOfJeus.css';

function MainOfJeus(props){
    

    return(
        <div className="player-box">
            <button onClick={()=>{props.setClick(true)}} className="bttn">버튼</button>
            <div className="player-line">  
                TOP
                <div className="player-id">
                    JEUS
                </div> 
            </div> 
        </div> 
    );
}
export default MainOfJeus;