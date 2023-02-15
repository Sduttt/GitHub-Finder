import React from "react";  
import loadgif from '../components/icons8-spinner.gif'

const Loading = () => {

    return (
        <img src={loadgif} alt="Loading" className="w-96 m-auto" />
    )
}

export default Loading;