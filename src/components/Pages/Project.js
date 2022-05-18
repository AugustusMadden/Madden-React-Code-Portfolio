import React from "react";

export default function Project(props) {
    return (
        <div>
            <ul className="list">
                {props.projects.map(item => (
                    <li className="list-item" key={item.id}>
                         <div className="container">
                                <div className="card">
                                    <img
                                        className="card-img"
                                        src={item.img}
                                        width={100}
                                        height={500}
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