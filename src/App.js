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
                    console.log(jsonData);
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    console.log(data);

    return (
        <div className='container'>
            <Search
                coordinates={[data?.latitude, data?.longitude]}
                dataMine={data}
            />
            <h3 className='made_by'>Made with ♡</h3>
        </div>
    );
}

export default App;
