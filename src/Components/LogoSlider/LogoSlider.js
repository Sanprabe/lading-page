import React from 'react'

import logoHtml from '../../Assets/htmlLogo.svg'
import logoCss from '../../Assets/cssLogo.svg'
import logoJs from '../../Assets/javascript.svg'
import logoReact from '../../Assets/react.svg'
import logoRedux from '../../Assets/redux.svg'
import logoNpm from '../../Assets/npm.svg'
import logoGit from '../../Assets/git.svg'
import logoPy from '../../Assets/python.svg'
import logoFlask from '../../Assets/flask.svg'
import logoPandas from '../../Assets/pandas.svg'

import Carousel from "react-elastic-carousel";
import './LogoSlider.css'


export default function LogoSlider() {

    return (
        <>
        <div className="logo-slider--container">
            <div className="logo-slider--title">
                <h3> <span>Tech</span><br /> I Know</h3>
            </div>
          <Carousel 
            // breakPoints={breakPoints} 
            itemPadding={[0, 0]} 
            itemsToShow={1} 
            outerSpacing={100} 
            initialActiveIndex={2}
          >
              <div className="logo-slider--item">
                  <img src={logoHtml} alt="" />
                  <p>Html</p>
              </div>
              <div className="logo-slider--item">
                  <img src={logoCss} alt="" />
                  <p>Css</p>
              </div>
              <div className="logo-slider--item">
                  <img src={logoJs} alt="" />
                  <p>Javascript</p>
              </div>
              <div className="logo-slider--item">
                  <img src={logoReact} alt="" />
                  <p>ReactJS</p>
              </div>
              <div className="logo-slider--item">
                  <img src={logoRedux} alt="" />
                  <p>Redux</p>
              </div>
              <div className="logo-slider--item">
                  <img src={logoNpm} alt="" />
                  <p>Npm</p>
              </div>
              <div className="logo-slider--item">
                  <img src={logoGit} alt="" />
                  <p>Git</p>
              </div>
              <div className="logo-slider--item">
                  <img src={logoPy} alt="" />
                  <p>Python</p>
              </div>
              <div className="logo-slider--item">
                  <img src={logoFlask} alt="" />
                  <p>Flask</p>
              </div>
              <div className="logo-slider--item">
                  <img src={logoPandas} alt="" />
                  <p>Pandas</p>
              </div>
          </Carousel>
        </div>
      </>
    )
}
