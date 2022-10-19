import React from 'react';
import "./Plane-notes.css"

const PlaneNotes =(props)=>{
   
    return(
        <div>
            <div className="container">
                <img className="paperplane" src = {props.image} />
                <div className="right">
                    <div className="h-right">
                        {props.hright}

                    </div>
                <div className="p-right">
                    {props.pright}
                    
                </div>
                </div>
                
                
            </div>
            

        </div>
    )
}

export default PlaneNotes