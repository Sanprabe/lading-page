import React, { useState } from 'react'

import './ProjectItem.css'

import logoRepo from '../../Assets/repo.svg'

import {GitHubOutlined, HyperLink } from '../../Assets/logos';


function ProjectItem({title, description, technologies, gitHubLink, projectLink}) {

    const [hoverGitHubOutlined, setHoverGitHubOutlined] = useState("#A1A1A1")
    const [hoverHyperLink, setHoverHyperLink] = useState("#A1A1A1")

    return (
        <div className="project-item--container">
            <div className="project-item--folder-icon">
                <img src={logoRepo} alt="a" />
            </div>
            <div className="project-item--links">
                <a href={gitHubLink} target="_blank">
                    <GitHubOutlined fill={hoverGitHubOutlined} onMouseEnter={() => setHoverGitHubOutlined("#FF9800")} onMouseLeave={() => setHoverGitHubOutlined("#A1A1A1")}  />
                </a>
                {
                    projectLink && <a href={projectLink} target="_blank"><HyperLink fill={hoverHyperLink} onMouseEnter={() => setHoverHyperLink("#FFF")} onMouseLeave={() => setHoverHyperLink("#A1A1A1")}  /></a>
                }
            </div>
            <div className="project-item--text">
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="project-item--technologies">
                    {technologies.map(
                            function(item, i){
                                return <p key={i}>{item}</p>
                            }
                        )}
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
