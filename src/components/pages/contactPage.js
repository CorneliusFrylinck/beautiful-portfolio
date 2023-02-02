import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ContactPage() {
    return(
        <div id="contact" className="bg contact-page">
            <h1 className="heading">CONTACT ME</h1>
            <p>Feel free to get in touch through LinkedIn or by e-mail.</p>
            <form method="post" action="mailto:corneliusfrylinck@zohomail.com">
                <input id="mailTo" type="submit" value="Send me an e-mail"/>
            </form>
            <div className="links">
                <a className="linkedIn" target="_blank" href="https://www.linkedin.com/in/cornelius-frylinck-710698188">in</a>
                <a className="gitHub" target="_blank" href="https://github.com/CorneliusFrylinck?tab=repositories"><GitHubIcon sx={{ fontSize: 45 }} color="primary" /></a>
            </div>
        </div>
    )
}