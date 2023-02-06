import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useStore } from "../../stores/store";

export default observer(function MainPage() {
    const { loadingStore } = useStore();

    useEffect(() => {
        setTimeout(() => {
            loadingStore.loading = false;
        }, 4000);
    }, [])
    
    return(
        <div id="main" className="bg main-page">
            <div className="flex-row">
                <div className="profile-container">
                    <div className="profile-displayed-container">
                        <div className="profile-greeting">Hi!</div>
                        <img className="profile" src="images/cornelius-min.png" alt="Profile" />
                    </div>
                </div>
                <div className="vcenter">
                    <h1 className="head-name">Cornelius Frylinck</h1>
                    <h2 className="head-role">Software Developer</h2>
                </div>
            </div>
        </div>
    )
})