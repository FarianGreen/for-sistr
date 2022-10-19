import React from 'react';
import "./Block-texts.css" 

class BlockText extends React.Component {
  
    render() {
      
      return (
          <> 
          <div className="yellow-text">{this.props.yellowtext}</div>
          <div className="h-text">{this.props.htext}</div>
          <div className="p-text">{this.props.ptext}</div>
          
          </>
         
      )
    }
    
  }

  export default BlockText