import React, { useState } from 'react'
                         
import './main.css'
import SideTab from '../SideTabMenu/SideTab'
import LogoSlider from '../LogoSlider/LogoSlider'
import profilePic from '../../Assets/size2.png'

import {GitHubOutlined, LinkedIn, Youtube } from '../../Assets/logos';
import ProjectItem from '../ProjectItem/ProjectItem';
import EmailContact from '../EmailContact/EmailContact';

function Main() {

    const projectsInfo = [

        {
            "title": "Landing Page",
            "description": "Yes, this is the exact page where you're right now. I know is tricky but this is a little example of what I can build as a front end dev",
            "technologies": ["React.js", "Email.js", "Sass"],
            "gitHubLink" : "https://github.com/sanprabet/lading-page",
        },
        {
            "title": "Poke App",
            "description": "Ths is a Web app that implements a restulAPI where you can search  pokemons pokemons and save them in your pokedex.",
            "technologies": ["React.js", "Poke API"],
            "gitHubLink" : "https://github.com/sanprabet/pokemon-web-app",
            "projectLink" : "https://sanprabet.github.io/pokemon-web-app/"
        },
        {
            "title": "Crud App",
            "description": "This is a CRUD application build with a custom data base created with Flask as Back-End where you can create notes and save themfor later",
            "technologies": ["Flask", "Html", "Css", "JS"],
            "gitHubLink" : "https://github.com/sanprabet/flask-crud-basic-app",
            "projectLink" : "https://flask-crud-basic.herokuapp.com/"
        },
        {
            "title": "ToDo App",
            "description": "This is a static web application build on top of react.js, you can search between the todos and it will update the todos shown depending on your search",
            "technologies": ["React.js"],
            "gitHubLink" : "https://github.com/sanprabet/todo-project",
            "projectLink" : "https://sanprabet.github.io/todo-project/"
        },
        {
            "title": "Tic Tac Toe",
            "description": "This is a mini game that I created to get used to functional components with hooks. User can go back to previous movements and logic is managed by context",
            "technologies": ["React.js"],
            "gitHubLink" : "https://github.com/sanprabet/triki-first-try",
            "projectLink" : "https://sanprabet.github.io/triki-first-try/"
        },
        {
            "title": "Batabel Landing Page",
            "description": "This is a landing page that was designed for a company initially called batabel. It was build mobile first and then escalated to desktop view ",
            "technologies": ["Html", "Css", "JS"],
            "gitHubLink" : "https://github.com/sanprabet/batabel-project",
            "projectLink" : "https://sanprabet.github.io/batabel-project/"
        },


    ]

    const [terminalColor, setTerminalColor] = useState("color1");

    const [hoverGitHubOutlined, setHoverGitHubOutlined] = useState("#A1A1A1")
    const [hoverLinkedIn, setHoverLinkedIn] = useState("#A1A1A1")
    const [hoverYoutube, setHoverYoutube] = useState("#A1A1A1")
    
    return (
        <>
            <main>
                <div className='main-content--container'>
                    <p className='main-salute'>Hi, my name is</p>
                    <p className='main-name'>Santiago&#160;Prada.</p>
                    <p className='main-name--badge'>I'm a React Dev Jr.</p>

                    <p className='main-description'>
                    I’m a Front-end web developer who is passionate about learning and implementing new technologies while creating the best user experience possible. I also love to ride my bike and solve puzzles.
                    </p>

                    <a href="https://drive.google.com/file/d/1Drh92VEaw1cuD7GdOIsBqEbBbMz4YPES/view?usp=sharing" target="blank">
                        <button>Look at my resume</button>
                    </a>
                </div>

            </main>
            <br id='main-id' />
            <section className='about--container'>
                <div className='about-title'>
                    <h3><span>01.</span>About</h3>
                </div>
                <div className='about-content--container'>
                    <div className='technologies-code-terminal'>
                        <div className={`technologies-code-terminal--text ${terminalColor}`}>

                            <p>
                                1.&#160;&#160;&#160;&#160;
                                <span className="terminal--blue">Class&#160;</span> 
                                <span className="terminal--green">AboutMe</span>  
                                <span className="terminal--yellow">&#123;</span>
                            </p>
                            <br />

                            <p>
                                2.&#160;&#160;&#160;&#160;&#160;&#160;
                                <span className="terminal--blue">Constructor</span> 
                                <span className="terminal--purple">()&#160;&#123;</span>
                            </p>
                            <br />

                            <p>
                                3. &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                                <span className="terminal--blue">this</span>
                                .
                                <span className='terminal--light-blue'>name</span> 
                                &#160;= &#160;
                                <span className='terminal--orange'>"Santiago Prada Betancourt"</span>
                            </p>
                            <br />

                            <p>
                                5. &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                                <span className="terminal--blue">this</span>
                                .
                                <span className='terminal--light-blue'>programmingLan</span> 
                                &#160;=&#160;
                                <span className='terminal--light-blue'>&#91;</span>
                                <span className='terminal--orange'>"JavaScript"</span>
                                ,
                                <span className='terminal--orange'>"Python"</span>
                                {/* ,
                                <span className='terminal--orange'>"Visual Basic"</span> */}
                                <span className='terminal--light-blue'>&#93;</span>
                            </p>
                            <br />
                            <p>
                                4. &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                                <span className="terminal--blue">this</span>
                                .
                                <span className='terminal--light-blue'>photo</span> 
                                &#160;=&#160;
                                <span className='terminal--purple'>url(</span>
                                <span className='terminal--link_text_pic'>
                                    <span className='terminal--blue'>"../Assets/profilePic.png"</span>
                                    <img src={profilePic} alt="me" />
                                </span>
                                <span className='terminal--purple'>)</span>
                                <span className='link_profile_pic'>
                                </span>
                                {/* <span className='terminal--dark-green'>&#160;# Hover me </span> */}
                            </p>
                            <br />


                            <p>
                                7. &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                                <span className="terminal--blue">this</span>
                                .
                                <span className='terminal--light-blue'>age</span> 
                                &#160;=&#160;
                                <span className="terminal--blue">new </span>
                                <span className="terminal--green">Date</span>
                                <span className='terminal--light-blue'>()</span>
                                .
                                <span className='terminal--light-blue'>getFullYear</span>
                                <span className='terminal--light-blue'>()</span> 
                                &#160;-&#160;
                                <span className='terminal--light-green'>2003</span>
                            </p>
                            <br />
                            <p>
                                6. &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; 
                                <span className="terminal--blue">this</span>
                                .
                                <span className='terminal--light-blue'>lan</span> 
                                &#160;=&#160;
                                <span className='terminal--light-blue'>&#91;</span>
                                <span className='terminal--orange'>"EN"</span>
                                ,
                                <span className='terminal--orange'>"ES"</span>
                                ,
                                <span className='terminal--orange'>"FR"</span>
                                <span className='terminal--light-blue'>&#93;</span>
                            </p>
                            <br />
                            <p>
                                4. &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                                <span className="terminal--blue">this</span>
                                .
                                <span className='terminal--light-blue'>country</span> 
                                &#160;=&#160;
                                <span className='terminal--orange'>"Colombia"</span>
                            </p>
                            <br />



                            <p>
                                8. &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                                <span className="terminal--purple">&#125;</span>
                            </p>
                            <br />

                            <p>
                                9. &#160;&#160;&#160;&#160;
                                <span className="terminal--yellow">&#125;</span>
                            </p>
                        </div>
                        <div className="technologies-code-color-changer--container">
                            <div className="color-changer--text">
                                <p>Change Terminal Color</p>
                            </div>
                            <div className="color-changer-color--container">
                                <div className="color-changer--color color1" onClick={() => setTerminalColor("color1")}></div>
                                <div className="color-changer--color color2" onClick={() => setTerminalColor("color2")}></div>
                                <div className="color-changer--color color3" onClick={() => setTerminalColor("color3")}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br id='about-id' />
            <section className='studies--container'>
                <div className='studies-title'>
                    <h3><span>02.</span>Studies</h3>
                </div>
                <div className="studies-content--container">
                    < SideTab />
                    < LogoSlider />
                </div>
            </section>
            <br id='projects-id' />
            <section className='projects--container'>
                <div className='projects-title'>
                    <h3><span>03.</span>Projects</h3>
                    <p>This are some of the projects that I've build as a Dev</p>
                </div>
                <div className="projects-grid--container">
                    {
                        projectsInfo.map(
                            function(item, i){
                                return <ProjectItem key={i} title={item.title} description={item.description} technologies={item.technologies} gitHubLink={item.gitHubLink} projectLink={item.projectLink}  />
                            }
                        )
                    }

                </div>
            </section>
            <br id='contact-id' />
            <section className='contact--container'>              
                <div className='contact-title'>
                    <h3><span>04.</span>Contact</h3>
                    <p>If you want to contact me or just say hi, go ahead <br /> my inbox is always open </p>
                </div>

                <EmailContact />

            </section>

            <footer>
                <div className="footer-social--container">
                    <a href="https://github.com/sanprabet" target="_blank">
                        <GitHubOutlined fill={hoverGitHubOutlined} onMouseEnter={() => setHoverGitHubOutlined("#FF9800")} onMouseLeave={() => setHoverGitHubOutlined("#A1A1A1")}  />
                    </a>
                    <a href="https://www.linkedin.com/in/santiago-prada-betancourt-3931991a6/" target="_blank">
                        <LinkedIn fill={hoverLinkedIn} onMouseEnter={() => setHoverLinkedIn("#00ADB5")} onMouseLeave={() => setHoverLinkedIn("#A1A1A1")} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCLWD0JpKr9BeSWVDemHqmJQ" target="_blank">
                        <Youtube fill={hoverYoutube} onMouseEnter={() => setHoverYoutube("#FF0000")} onMouseLeave={() => setHoverYoutube("#A1A1A1")} />
                    </a>
                </div>
                <div className="footer-sign--container">
                    <h5>Designed and build by <span> Quark </span></h5>
                </div>
            </footer>
        </>
    )
}

export { Main }
