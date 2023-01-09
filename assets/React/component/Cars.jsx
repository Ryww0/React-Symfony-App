import React, {useState, useEffect} from 'react';

const API_URL = 'http://localhost:8000/api';

function StudentList() {
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
            <ul>
                {
                    cars.map(data => (
                        <li key={data.id}>{data.name}</li>
                    ))
                }
            </ul>
        </>
    );
}

export default StudentList;