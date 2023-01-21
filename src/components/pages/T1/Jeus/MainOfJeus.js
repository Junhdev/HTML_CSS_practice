import React, { useState, useEffect } from 'react'
import './designOfJeus.css';
let isFirst = false
function MainOfJeus(props){
    useEffect(() => {
        if(isFirst){
          isFirst = true
          return
        }
  
      //your code that don't want to execute at first time
    },[])
    

    return(
        <div className="player-box">
            <button onClick={()=>{props.setClick1(true)}} className="bttn">버튼</button>
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