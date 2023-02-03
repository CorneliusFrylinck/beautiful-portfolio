import React from "react";
import port3D from "../../assets/images/3dPortfolio.png";
import luxit from "../../assets/images/luxit.png";
import activities from "../../assets/images/corlinckActivities.png";
import saveTheDate from "../../assets/images/saveTheDate.png";
import oldPortfolio from "../../assets/images/oldPortfolio.png";
import potatogeddon from "../../assets/images/potatogeddon.png";

export default function ProjectPage() {
    return(
        <div className="project-page">
            <h1 className="heading">Projects</h1>
            <div id="projects">
                <div id="luxit" className="p">
                    <img className="luxit project" src={luxit} alt="luxit"/>
                    <span>Luxit Legal Bill. A project designed to assist lawyers and legal cost consultants by making it quicker and easier to create a "Bill of Cost".</span>
                </div>
                <div id="activities" className="p">
                    <img className="activities project" src={activities} alt="portfolio"/>
                    <span>Corlinck Activities. A project built to improve on skills and technologies we were using to develop a UserVerification system.</span>
                </div>
                <div id="oldport" className="p">
                    <img className="oldport project" src={oldPortfolio} alt="oldport"/>
                    <span>My first portfolio. I created this project during my final year of university and used it to get both of my first two jobs.</span>
                </div>
                <div id="savethedate" className="p">
                    <img className="savethedate project" src={saveTheDate} alt="savethedate"/>
                    <span>Save The Date. A website I wrote to assist with wedding invitations for my own wedding.</span>
                </div>
                <div id="port3d" className="p">
                    <img className="port3d project" src={port3D} alt="3D Portfolio"/>
                    <span>3D Portfolio. An interactive game-like portfolio I wrote to improve my React skills and to create something interesting.</span>
                </div>
                <div id="potatogeddon" className="p">
                    <img className="potatogeddon project" src={potatogeddon} alt="potatogeddon"/>
                    <span>Potatogeddon. A game I wrote in the first week of January 2023, but paused to focus on this portfolio and learning about Design Patterns.</span>
                </div>
            </div>
        </div>
    )
}