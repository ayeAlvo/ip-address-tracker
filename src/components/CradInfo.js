import React from 'react';
import './CardInfo.css';

const CardInfo = ({ data }) => {
    return (
        <div className='card_item'>
            <div className='card'>
                <div className='card_image'>
                    <img
                        src={`https://countryflagsapi.com/png/${data.country_code}`}
                        alt={`Country Flag ${data.country_name}`}
                    />
                </div>
                <div className='card_content'>
                    <h2 className='card_title'>Data IP {data.ip}</h2>
                    <p className='card_text'>Country {data.country_name}</p>
                    <p className='card_text'>Region {data.region}</p>
                    <p className='card_text'>City {data.city}</p>
                    <p className='card_text'>Code Postal {data.postal}</p>
                    <p className='card_text'>ISP {data.org}</p>
                    <p className='card_text'>
                        Colling Code {data.country_calling_code}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;
