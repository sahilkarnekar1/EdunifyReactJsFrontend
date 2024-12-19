import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ShowSchools.css'; // Import the CSS file

const ShowSchools = () => {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/getSchools')
            .then((response) => setSchools(response.data))
            .catch((error) => console.error('Error fetching schools', error));
    }, []);

    return (
        <div className="schools-container">
            {schools.map((school) => (
                <div className="school-card" key={school.id}>
                    <img
                        src={`http://localhost:5000${school.image}`}
                        alt={school.name}
                        className="school-image"
                    />
                    <div className="school-details">
                        <h3 className="school-name">{school.name}</h3>
                        <p className="school-address">{school.address}</p>
                        <p className="school-city">{school.city}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShowSchools;
