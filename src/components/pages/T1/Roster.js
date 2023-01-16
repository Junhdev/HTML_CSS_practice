import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import profileJeus from '../../../images/T1-player/profile_Jeus.jpg';
import profileOner from '../../../images/T1-player/profile_Oner.jpg';
import profileFaker from '../../../images/T1-player/profile_Faker.jpg';
import profileGumayusi from '../../../images/T1-player/profile_Gumayusi.jpg';
import profileKeria from '../../../images/T1-player/profile_Keria.jpg';
import './Roster.css';
import styled from "styled-components";



const Roster  = () => {
    const [click, setClick] = useState(false);
    let [fade,setFade] = useState('');

    const useClick = (click) => {
        useEffect(()=>{
        setClick(!click)},[click])

        useEffect(()=>{
            setFade('end') ;
         
             return ()=>{
                 setFade('');
                 
             };
         },[click]);
    };
   
   
   
   
   
   
    /* const [isOpen, setIsOpen] = useState(false);
    
    const [fade, setFade] = useState('');
     const useButton = (isOpen) => {
       
        setIsOpen(!isOpen);

        useEffect(()=>{
            
            setTimeout(()=>{ setFade('end');  }, 100)
            return ()=> {
                setFade('')
            }
        },[isOpen])
        
    }
        /* if(isOpen===false){
                setEffect('stats');
                setIsOpen(true);
                
            }
            else{
                setTimeout(()=> {setIsOpen(false)}, 400);
                setEffect('main');
            }
        }
            /* const Timer = setTimeout( ()=>{setIsOpen(false)}, 1000 )
            return ()=>{clearTimeout(Timer);}} , [] */
       
    

    return(
        <div>
            <ul className="player-list">
                <li onClick={()=> setClick(!click)} className="player-card" >
                <button onClick={useClick} className="bttn">버튼</button>
                    
                    { click ? 
                    <div className={"back-card start " +fade }>
                        <div className='stat'>성적</div>
                    </div> 
                    : 
                    <div className={"start " +fade }>
                        <div className="player-container">  
                        TOP
                            <div className="player-intro">
                                JEUS
                            </div> 
                        </div> 
                    </div> 
                    }
                    

                </li>
                <li className="player-card">
                    <img className="player-image" src={profileOner} alt="Jgl" />
                    123
                    <div className="player-container">
                        <div className="player-intro">
                            111
                        </div>
                    </div>

                </li>
                <li className="player-card">
                    <img className="player-image" src={profileFaker} alt="Mid" />
                    123
                    <div className="player-container">
                        <div className="player-intro">
                            111
                        </div>
                    </div>

                </li>
                <li className="player-card">
                    <img className="player-image" src={profileGumayusi} alt="Adc" />
                    123
                    <div className="player-container">
                        <div className="player-intro">
                            111
                        </div>
                    </div>

                </li>
                <li className="player-card">
                    <img className="player-image" src={profileKeria} alt="Spt" />
                    123
                    <div className="player-container">
                        <div className="player-intro">
                            111
                        </div>
                    </div>

                </li>

            </ul>
            
        
        
            </div> 
    )
            
           
};


  
export default Roster;

