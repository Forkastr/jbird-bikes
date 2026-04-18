import React from 'react';
import './page.css';

const Page = () => {
    return (
        <div style={{ backgroundColor: '#008000', color: '#FFFFFF', padding: '20px' }}>
            <h1>Welcome to JBird Bike</h1>
            <div className="bg-jbird-blue" style={{ backgroundColor: '#3064C7', padding: '10px' }}>
                <p style={{ color: '#FFFFFF' }}>This is a white section box now converted to JBird Blue.</p>
            </div>
            <div className="bg-jbird-blue" style={{ backgroundColor: '#3064C7', padding: '10px' }}>
                <p style={{ color: '#FFFFFF' }}>Another white section box now converted to JBird Blue.</p>
            </div>
        </div>
    );
};

export default Page;