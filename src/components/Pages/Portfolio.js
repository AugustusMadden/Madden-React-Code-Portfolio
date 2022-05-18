import React from 'react';
import Project from './Project';

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
        <Project projects = { projects } />
      </div>
    );
  }