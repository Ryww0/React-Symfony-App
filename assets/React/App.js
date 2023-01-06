import React, { useState, useEffect } from 'react';

const API_URL = 'http://localhost:8000/api';

function CarList() {
    // console.log('je suis dans app.js')
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/cars`)
            .then((response) => response.json())
            .then((data) => {
                setCars(JSON.parse(data));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <p>salut mon pote</p>
            <ul>
                {
                    cars.map(car => (
                        <li key={car.id}>{car.name}</li>
                    ))
                }
            </ul>
        </>
    );
}

export default CarList;