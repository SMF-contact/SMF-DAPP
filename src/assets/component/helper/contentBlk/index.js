import React from "react";
import "./style.css" 


function ContentBlk({classes,children}) {
    return (
        <div className={classes}>
            <div className="contentBlk">
                {children}
            </div>
        </div> 
    )
}

export default ContentBlk;