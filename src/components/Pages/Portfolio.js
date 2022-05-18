import React from 'react';

import textEditImg from '../../assets/TextEdit.PNG'
import workDayImg from '../../assets/WD.PNG'
import noteTakerImg from '../../assets/NT.PNG'

const projects = [
    {
        id: 1,
        name: "Text Editor",
        img: textEditImg,
        repoURL: "https://github.com/AugustusMadden/TextEditor",
        deployURL: "https://dry-river-02816.herokuapp.com/"
    },
    {
        id: 2,
        name: "WorkDay Scheduler",
        img: workDayImg,
        repoURL: "https://github.com/AugustusMadden/workDay-scheduler",
        deployURL: "https://augustusmadden.github.io/workDay-scheduler/"
    },
    {
        id: 3,
        name: "Note Taker App",
        img: noteTakerImg,
        repoURL: "https://github.com/AugustusMadden/noteTaker-Repo",
        deployURL: "https://still-river-81456.herokuapp.com/"
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
                                    <img
                                        className="card-img"
                                        src={item.img}
                                        width={100}
                                        height={100}
                                        alt=""
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title">Name: {item.name}</h4>
                                        <a href={item.repoURL} className="card-text">Github Code Repository</a>
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