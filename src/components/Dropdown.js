import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import './Dropdown.css';

function Dropdown(){
    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return(
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}> {/* dropdown-menu 박스 생성 */}
                {MenuItems.map((item, index) => { {/*item은 MenuItmes의 element들*/}
                    return(
                        <li key={index}> {/* index를 key로 지정 */}
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            
        </>
    )
}

export default Dropdown;