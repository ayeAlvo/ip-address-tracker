import './App.css';
import { useState, useEffect } from 'react';
import Search from './components/Search';

function App() {
    const [data, setData] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        await fetch(`https://ipapi.co/json/`)
            .then(function (response) {
                response.json().then((jsonData) => {
                    setData(jsonData);
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className='container'>
            <h1 className='title'>Address Tracker IP</h1>
            <Search
                coordinates={[data?.latitude, data?.longitude]}
                dataMine={data}
            />
            <h3 className='made_by footer'>Made with ♡ by ayeAlvo</h3>
        </div>
    );
}

export default App;
