import React from "react";
import './SideBar.css'

export default class SideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      scrollPos: 0
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos
    });
  };

  render() {
    return (       
        <div className={`nav sideBar--color-container ${this.state.show ? "active" : "hidden"}`}>
                 <div className='sideBar-container'>
                     <span className='sideBar-container--logo'></span>
                     <ul className='sideBar-list-container'>
                         <li><a href="#main-id"><span>01.</span>About</a></li>
                         <li><a href="#about-id"><span>02.</span>Studies</a></li>
                         <li><a href="#projects-id"><span>03.</span>Projects</a></li>
                         <li><a href="#contact-id"><span>04.</span>Contact</a></li>
                         <a href="https://drive.google.com/file/d/1Drh92VEaw1cuD7GdOIsBqEbBbMz4YPES/view?usp=sharing" target="blank">
                          <button>CV</button>
                        </a>
                     </ul>
                 </div>
             </div>)
  }
}