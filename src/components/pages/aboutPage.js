import React from "react";
import SlideShow from "./slideshow";

export default function AboutPage() {
    return(
        <div id="about" className="bg about-page">
            <h1 className="heading">About Me</h1>
            <div className="flex-row">
                <div className="about-text">
                    <p>
                        Hi, I'm a 25-year-old South-African full stack software engineer, specializing mostly in React and .Net Core.
                    </p>
                    <p>
                        In my spare time I enjoy working on new projects, learning new technologies, exercising, watching anime, playing games with friends, playing with my dog and spending time with my wife.
                    </p>
                    <p>
                        I used to compete in Strongman competitions since I was 15, however the past couple of years I've been focusing almost only on development.
                    </p>
                </div>
                <SlideShow />
            </div>
        </div>
    )
}