import React from 'react';

import resumeImg from '../../assets/Madden_Resume.jpg'


export default function Resume() {
    return (
        <div>
            <img
                className="card-img"
                src= {resumeImg}
                alt=""
                />
        </div>
    );
}