import React, { Component } from 'react';
import "./First.css";
import emy from "../Images/image-amyrobson.png";


class First extends Component {
  state={
    user:[
      {
        id:0,
        name:"amyrobson",
        status:"1 month ago",
        comment:"You've nailed the design and the responsiveness at various breakpoints works really well.Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. "
      }
    ]
    
    
  }
  render() {
    const data=this.state.user.map((e)=>{
      return(


      
      <header className='header' key={e.id}>
      <img src={emy} alt=""/>
      <p>{e.name}</p>
      <span className='status'>{e.status}</span>
      <span className='reply'>Reply</span>
      
      </header>
      )        
    })
    const comment=this.state.user.map((e)=>{
      return(
        <div className='comment-container' key={e.id}>
        <p>{e.comment}</p>
        </div>
      )
    })
    return (
      <div className="first-comment">
         {data}
         {comment}
      </div>
    )
  }
}
export default First;