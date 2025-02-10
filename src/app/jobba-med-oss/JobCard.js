import React from 'react';

const JobCard = ({ job }) => {
    // Check if required data exists, otherwise fallback to default values
    const logo = job.logo || '/img/default-logo.png'; // Default logo if none exists
    const designation = job.designation || 'No Designation Available'; // Fallback text for missing designation
    const location = job.location || 'Location not provided'; // Fallback text for missing location

    return (
        <div className="job-card" style={styles.card}>
            <img
                src={logo}
                alt={designation}
                style={styles.logo}
            />
            <div className="job-info" style={styles.info}>
                <h3 style={styles.designation}>{designation}</h3>
                <p style={styles.location}>{location}</p>
            </div>
        </div>
    );
};

// Styles (you can adjust the styling according to your needs)
const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        width: '300px',
        margin: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    logo: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginRight: '16px',
    },
    info: {
        flex: 1,
    },
    designation: {
        fontSize: '18px',
        fontWeight: 'bold',
        margin: '0',
    },
    location: {
        fontSize: '14px',
        color: '#555',
    },
};

export default JobCard;
