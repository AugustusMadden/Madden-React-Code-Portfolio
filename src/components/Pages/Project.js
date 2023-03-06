import React from "react";
import '../Styles/Project.css'

export default function Project(props) {
    return (
        <div className = "menu-item">
            <ul className="list">
                {props.projects.map(item => (
                    <li className="list-item" style={{listStyleType: "none"}} key={item.id}>
                         <div className="container">
                                <div className="card">
                                    <img
                                        className="card-img"
                                        src={item.img}
                                        alt=""
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title">{item.name}</h4>
                                        <a href={item.repoURL} className="card-text">Github Code Repository</a>
                                        <br></br>
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