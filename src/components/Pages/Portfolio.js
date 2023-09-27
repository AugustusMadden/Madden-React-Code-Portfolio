import React from 'react';
import Project from './Project';

import firstImage from '../../assets/IVDB.png'
import secondImage from '../../assets/AutoAuction.png'
import thirdImage from '../../assets/TextEdit.PNG'
import fourthImage from '../../assets/travelcheck_white.png'

const projects = [
    {
        id: 1,
        name: "IVDB",
        img: firstImage,
        repoURL: " https://github.com/AugustusMadden/VDB-App", 
        deployURL: "https://tranquil-sierra-28921.herokuapp.com/"
    },
    {
        id: 2,
        name: "Auto Auction",
        img: secondImage,
        repoURL: "https://github.com/AugustusMadden/madden-autoAuction",
        deployURL: "https://protected-headland-13908.herokuapp.com/"
    },
    {
        id: 3,
        name: "Text Editor PWA",
        img: thirdImage,
        repoURL: "https://github.com/AugustusMadden/TextEditor",
        deployURL: "https://dry-river-02816.herokuapp.com/"
    },
    {
      id: 4,
      name: "TravelCheck",
      img: fourthImage,
      repoURL: "https://github.com/AugustusMadden/travelcheck",
      deployURL: "https://augustusmadden.github.io/travelcheck/"
  },
]

export default function Portfolio() {
    return (
      <div>
        <h1>Projects</h1>
          <div>
            <Project projects = { projects } />
          </div>
      </div>
    );
  }