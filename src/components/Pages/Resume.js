import React from 'react';

import resumeImg from '../../assets/Madden_Resume.pdf'


export default function Resume() {
    return (
        <div>
            <div className="card">
                <object data = {resumeImg} type="application/pdf" height="700"> </object>
            </div>
        </div>
    );
}