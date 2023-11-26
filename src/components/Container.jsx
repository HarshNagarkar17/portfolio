import React from 'react'
import GitLogo from "../images/github-black.png"
import { Nav } from './Nav'
import { Helmet } from "react-helmet"
import { Profile } from './Profile'
export const Container = () => {
    return (
        <>
        {/* <a href="https://www.flaticon.com/free-icons/portfolio" title="portfolio icons">Portfolio icons created by Freepik - Flaticon</a> */}
            <Helmet>
                <title>Harsh Nagarkar - Portfolio</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <Nav />
            <Profile />
            <div class="container">
                <h3>Projects</h3>

                <div class="projects">
                    <a href="https://github.com/HarshNagarkar17/campusLink" target="_blank">
                        <div class="project">
                            <img src={GitLogo} alt="" />
                            <div class="project-info">
                                <h3>CampsLink</h3>
                                <p>CampusLink enhances student-faculty communication and offers
                                    a calendar feature to keep students informed about assignments and exam schedules.</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/HarshNagarkar17/Conet-git" target="_blank">
                        <div class="project">
                            <img src={GitLogo} alt="" />
                            <div class="project-info">
                                <h3>Conet</h3>
                                <p>A college networking website for students where they can share their
                                    projects, achievements, and connect with others. </p>
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/HarshNagarkar17/ReadConnect" target="_blank">
                        <div class="project">
                            <img src={GitLogo} alt="" />
                            <div class="project-info">
                                <h3>ReadConnect</h3>
                                <p>A place to find, get and review books you love. Connect with other book lovers </p>
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/HarshNagarkar17/MERN-VideoCollab" target="_blank">
                        <div class="project">
                            <img src={GitLogo} alt="" />
                            <div class="project-info">
                                <h3>VideoCollab</h3>
                                <p>A dynamic web application that enables users to engage in peer-to-peer real-time video
                                    calls while simultaneously sharing a collaborative whiteboard. </p>
                            </div>
                        </div>
                    </a>
                </div>
                <h3>Skills</h3>
                <div class="skills-container">
                    <div class="skill-card">
                        <div class="skills-title">Frontend</div>
                        <div class="skills">
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-black">HTML</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2">CSS</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-yellow-500">Javascript</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500">React Js</div>
                        </div>
                    </div>
                    <div class="skill-card">
                        <div class="skills-title">Backend</div>
                        <div class="skills">
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500">NodeJs</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-yellow-500">ExpressJs</div>
                        </div>
                    </div>
                    <div class="skill-card">
                        <div class="skills-title">Database</div>
                        <div class="skills">
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500">MySql</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-yellow-500">MongoDB</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
