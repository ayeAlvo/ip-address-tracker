import React, { useState } from 'react';
import './Search.css';
import ViewMap from './ViewMap';
import CardInfo from './CradInfo';

function Search({ coordinates, dataMine }) {
    const [data, setData] = useState(null);
    const [searchCoordinates, setSearchCoordinates] = useState([]);

    const getIpData = async (searchIp) => {
        await fetch(`https://ipapi.co/${searchIp}/json/`)
            .then(function (response) {
                response.json().then((jsonData) => {
                    setData(jsonData);
                    console.log(data);
                    setSearchCoordinates([
                        jsonData.latitude,
                        jsonData.longitude,
                    ]);
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleSearch = (e) => {
        getIpData(e.target[0].value);
        e.preventDefault();
    };

    return (
        <>
            <div id='cover'>
                <form method='get' action='' onSubmit={handleSearch}>
                    <div className='tb'>
                        <div className='td'>
                            <input
                                name='input'
                                type='text'
                                placeholder='Search IP'
                                required
                            />
                        </div>
                        <div className='td' id='s-cover'>
                            <button type='submit'>
                                <div id='s-circle'></div>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <p className='text-ip'>Tu IP actual es {dataMine.ip}</p>
            </div>
            {searchCoordinates.length > 0 && (
                <>
                    <CardInfo data={data} />
                    <ViewMap coordinates={searchCoordinates} />
                </>
            )}
            {searchCoordinates.length === 0 && (
                <>
                    <CardInfo data={dataMine} />
                    <ViewMap coordinates={coordinates} />
                </>
            )}
        </>
    );
}

export default Search;
