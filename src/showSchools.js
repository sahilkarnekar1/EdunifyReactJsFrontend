import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ShowSchools.css'; // Import the CSS file

const ShowSchools = () => {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        axios
            .get('https://ed-backend-ruby.vercel.app/getSchools')
            .then((response) => setSchools(response.data))
            .catch((error) => console.error('Error fetching schools', error));
    }, []);

    return (
        <div className="schools-container">
            {schools.map((school) => (
                <div className="school-card" key={school.id}>
                    <img
                        src={school.image}
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
