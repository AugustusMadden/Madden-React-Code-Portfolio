import React from 'react';

import resumeImg from '../../assets/Madden_Resume.pdf'


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