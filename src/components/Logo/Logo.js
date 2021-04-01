import React from 'react';
import './Logo.css';
import Sasuke from '../../pics/Sasuke.jpg';

function Logo (){
    return(
        //Created a logo with pika pic
        <div>
            <img src={Sasuke} className="logo" alt="pic"/>
        </div>
    )
}

export default Logo;