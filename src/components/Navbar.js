import React, { useState } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        }
        else{
            setDropdown(true)
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false)
        }
        else{
            setDropdown(false)
        }
    };

    return (
        <>
          <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
                LCK <i className='fab fa-firstdraft' />
            </Link>
            <div className='menu-icon' onClick={handleClick}> {/* 아이콘을 누르면 handleClick 함수가 실행되므로 click이 f<->t 반복되면서 바뀐다 */}
                <i className={click ? 'fas fa-times' : 'fa-sharp fa-solid fa-bars'} /> {/*false가 첫 mount값이므로 이렇게 설정*/}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}> {/* Home을 누르면 closeMobileMenu 함수가 실행되므로 click이 false로 바뀐다 */}
                        Home
                    </Link>
                </li>
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                {/* onMouseEnter 가 실행되면 960px 이상에서는 dropdown이 true로 바뀐다.
                  onMouseLeave 가 실행되면  dropdown이 false로 바뀐다. 
                  하단 설정에 의해 dropdown이 true일때 <Dropdown /> 이 로드된다. */}
                    <Link to='/teams' className='nav-links' onClick={closeMobileMenu}>
                        Teams <i className='fas fa-caret-down' />  
                    </Link>
                    {dropdown && <Dropdown />}
                </li>
                <li className='nav-item'>
                    <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                        Contact Us
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign up
                    </Link>
                </li>
            </ul>
            <Button />
          </nav>
        </>
    )
}

export default Navbar;