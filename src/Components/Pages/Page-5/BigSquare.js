import React from 'react'


const BigSquare =(props)=>{
    return(
        <div className={props.class}>
            <div className="imgs">
              <img src={props.image} />
            </div>
            <div className="square-text">
              <div className="square-text-h">{props.title}</div>
              <div className="square-text-p">
                {props.text}
              </div>
            </div>
          </div>
    )
}
export default BigSquare