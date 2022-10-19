import React from "react";


const Ava =(props)=>{
    return (
        <div className="person">
          <div className="team-img"><img src={props.img} /></div>
            <div className="person-info">
                <span className="person-name">{props.name}</span>
                <div className="skill">{props.skill}</div>
            </div>
        </div>
    )
}

export default Ava