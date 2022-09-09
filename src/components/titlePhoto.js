import React from 'react';
import armazenLogo from "../assets/warehouse.png";

function TitlePhoto(){
    return (
        <div>
            <h2><img src={armazenLogo} alt='ArmazenLogo' className='ArmazenPhoto' /> Genial</h2>
        </div>
    )
}

export default TitlePhoto;