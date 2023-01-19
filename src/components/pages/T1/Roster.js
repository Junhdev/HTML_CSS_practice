import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import profileOner from '../../../images/T1-player/profile_Oner.jpg';
import profileFaker from '../../../images/T1-player/profile_Faker.jpg';
import profileGumayusi from '../../../images/T1-player/profile_Gumayusi.jpg';
import profileKeria from '../../../images/T1-player/profile_Keria.jpg';
import './Roster.css';
import styled from "styled-components";
import StatsOfJeus from './Jeus/StatsOfJeus';
import MainOfJeus from './Jeus/MainOfJeus';



const Roster  = () => {
    const [click, setClick] = useState(false);
    
    /*     useEffect(()=>{
            첫 마운트시 메인 효과 실행 안되게
    },[]); */
   
    return(
        <div>
            <ul className="player-list">
                <li className="player-card" >
                
                    
                    { click ? <StatsOfJeus setClick={setClick} /> : <MainOfJeus setClick={setClick} /> }
                    

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




