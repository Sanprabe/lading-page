import React, { useState } from 'react'
import './SideTab.css'

export default function SideTab() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    return (
      <div className="sideTab--container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Platzi
          </button>

          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            ML-Bootcamp
          </button>

          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            UNAL
          </button>

          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            FreeCodeCamp
          </button>

        </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2><span>Student</span>@Platzi</h2>
          <p>
            This <span>platform</span> is my go to when I want to learn new technologies. I've gotten more than <span>30 courses</span> certificates in a wide range of fields like algorithms, data structures, or my favorite: <span>Web Dev Technologies</span>
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2><span>Student</span>@Universidad Iberoamericana</h2>
          <p>
            One of my passions is learnig new tech implementations and a Bootcamp focused in <span>Machine Learning</span> was the best option to start. During this couse I've learned how to use <span>data as an asset</span>, from understranding customer behavior in order to increase sells to look at historical data in contemplation of <span>predicting the future</span>.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2><span>Student</span>@Universidad Nacional de Colombia</h2> 
          <p> 
            In 2020 I started my <span>undergraduate</span> studies in Industrial enginering. Even though I fell in love with <span>technology</span> several years ago, I think this career choice helps me to understand <span> the way companies work </span> and in the long term I expect this to facilitate me the entring to the <span>entrepreneurship</span> world.
          </p>
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2><span>Student</span>@FreeCodeCamp</h2>
          <p>
            As thousands of developers around the world, FreeCodeCamp is the <span>best choice</span> whenever I need to implement a new technology <span>ASAP</span>. While I was studing in Canada someone recomeded me this platform and since then is one of my <span>most frequent</span> searchs.
          </p> 
        </div>

      </div>
    </div>
    )
}
