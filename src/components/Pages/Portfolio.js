import React from 'react';

const projects = [
    {
        id: 1,
        name: "",
        repoURL: "",
        deployURL: ""
    },
    {
        id: 2,
        name: "",
        repoURL: "",
        deployURL: ""
    },
    {
        id: 3,
        name: "",
        repoURL: "",
        deployURL: ""
    },
]

export default function Portfolio() {
    return (
        <div>
            <h1>Coding Portfolio</h1>
            <ul className="list">
                {projects.map(item => (
                    <li className="list-item" key={item.id}>
                         <div className="container">
                                <div className="card">
                                    {/* <img
                                        style = {styles.pic}
                                        className="card-img-top"
                                        src={item.img}
                                        width={25}
                                        height={150}
                                        alt="Card cap"
                                    /> */}
                                    <div className="card-body">
                                        <h4 className="card-title">Name: {item.name}</h4>
                                        <a href={item.repoURL} className="card-text">Github Repository</a>
                                        <a href={item.deployURL} className="card-text">Deployed Application</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
}