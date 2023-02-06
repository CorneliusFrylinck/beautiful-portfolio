import { observer } from "mobx-react-lite";
import React from "react";

const Loader = (props) => {
    return (
        <p id="loader" className="loader"><span>C</span></p>
    )
}

export default observer(Loader);