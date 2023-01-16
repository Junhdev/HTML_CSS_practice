import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom'

export function Button(){ //export에다 직접 컴포넌트 생성하여 전송
    return(
        <Link to='sign-up'>
            <button className='btn'>Sign up</button>
        </Link>
    )
}