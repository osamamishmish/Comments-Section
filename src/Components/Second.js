import React, { Component } from 'react'
import max from "../Images/image-maxblagun.png";
import julio from "../Images/image-juliusomo.png";
import "./Second.css";
import $ from "jquery";
class Second extends Component {
  state={
    user:[
      {
        name:"maxblagun",
        status:"2 weeks ago",
        comment:"Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        id:1
      }
    ],
    Reply:[{
      comment:""
    }
      
    ]
  }
  ShowReply=()=>{
    $(".reply-container").addClass("show")
    }
  
  render() {
    const data=this.state.user.map((e)=>{
      return(
        <header className='header' key={e.id}>
      <img src={max} alt=""/>
      <p>{e.name}</p>
      <span className='status'>{e.status}</span>
      <span className='reply' onClick={this.ShowReply} >Reply</span>
      
      
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
      <div className="second-section">
      
      <div className='second-comment'>
        {data}
        {comment}
      </div>
      <div  className="reply-container">
      <img src={julio} alt=""/>
        <textarea />
      <button className="reply-button">Reply</button>
        </div>
        </div>
    )
  }
}
export default Second;