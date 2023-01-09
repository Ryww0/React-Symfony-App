import React, {useState, useEffect} from 'react';

const API_URL = 'http://localhost:8000/api';

function StudentList() {
    const [students, setStudent] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/student`)
            .then((response) => response.json())
            .then((data) => {

                setStudent(JSON.parse(data));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <ul>
                {
                    students.map(student => (
                        <li key={student.id}>{student.name}</li>
                    ))
                }
            </ul>
        </>
    );
}

export default StudentList;