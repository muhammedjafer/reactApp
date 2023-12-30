import 'bulma/css/bulma.css';
import { useState } from 'react';

function getRandomAnimal() {
    const animals = [
        'bird',
        'cat',
        'cow',
        'dog',
        'gator',
        'horse'
    ];

    return animals[Math.floor(Math.random() * animals.length)];
}

export default function App() {

    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        
        setAnimals([...animals, getRandomAnimal()]);
    };

    return (
        <div className='m-3'>
            <button onClick={handleClick} className='button'>Add Animal: </button>
        <div>{animals}</div>
        </div>
    );
}