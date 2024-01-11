import React from "react";

const ProjectList = () => {
    const projects = [
        {
            title: 'Furever Friends',
            description: 'A full stack application dedicated to connecting pet lovers to their pets',
            gLink: 'https://github.com/Rounderr21/FureverFriends',
            aLink: 'https://pure-scrubland-49342-080c7f0b82aa.herokuapp.com/',
        },

        {
            title: 'Just Another Text Editor',
            description: 'A progressive web application that you can install and use offline',
            gLink: 'https://github.com/TorySnopl/text_editor',
            
        },

        {
            title: 'CLI Employee Tracker',
            description: 'A command line interface application that could be used to maintain an employee database',
            gLink: 'https://github.com/TorySnopl/employee_tracker',
           
        },

        {
            title: 'Live Local',
            description: 'A web application built using the google maps api to help get the most out of your travels',
            gLink: 'https://github.com/Rounderr21/Live_Local',
            aLink: 'https://rounderr21.github.io/Live_Local/',
        },

        {
            title: 'Password Generator',
            description: 'A web app that generates strong passwords',
            gLink: 'https://github.com/TorySnopl/password-generator',
            aLink: 'https://torysnopl.github.io/password-generator/',
        },

        {
            title: 'Rock Paper Scissors Lizard Spock',
            description: 'A spin off of the traditional game made popular by the Big Bang Theory',
            gLink: 'https://github.com/TorySnopl/rock-paper-scissors-lizzard-spock',
            aLink: 'https://torysnopl.github.io/rock-paper-scissors-lizzard-spock/',
        },
    ];

    return (
        <div className="project-list">
            <h2>Some of my coding projects:</h2>
            <ul>
                {projects.map((project, index)=>(
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.aLink} target="_blank" rel="noopener noreferrer" >
                            Deployed Application
                        </a>
                        <a href={project.gLink} target="_blank" rel="noopener noreferrer" >
                            Github Repo
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )

};

export default ProjectList;