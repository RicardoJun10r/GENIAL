import React from 'react';
import armazenLogo from "../assets/warehouse.png";
import './titlePhoto.css';

function TitlePhoto(){
    return (
        <div className='ArmazenPhoto'>
            <h2><img src={armazenLogo} alt='ArmazenLogo'/> Genial</h2>
        </div>
    )
}

export default TitlePhoto;