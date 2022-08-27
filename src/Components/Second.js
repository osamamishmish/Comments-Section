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
      
    }]
  }
  Reply=[];
  ShowReplyField=()=>{
    $(".reply-container").addClass("show")
    $(".reply-container textarea").text("@maxblagun,")
    }
  SaveComment=(e)=>{
this.Reply.comment=e.target.value
this.Reply.id=this.Reply.length

this.setState({
  Reply:this.Reply
})

  }
  AddReply=()=>{
    const container=document.createElement("div"),
          img=document.createElement("img"),
          headerContainer=document.createElement("div"),
          buttonsContainer=document.createElement("div"),
          Delete=document.createElement("button"),
          edit=document.createElement("button"),
          text=document.createElement("p");
          $(Delete).text("Delete").appendTo(buttonsContainer);
          $(edit).text("Edit").appendTo(buttonsContainer);
          $(buttonsContainer).appendTo(headerContainer).addClass("buttons-container");
          $(headerContainer).addClass("header-container").prependTo(container);
          $(img).attr("src",julio).prependTo(headerContainer);
          $(text).text(this.state.Reply.comment).appendTo(container);
          $(container).addClass(this.state.Reply.id).attr("id","replies").insertAfter(".second-comment")
  }
  render() {
    
    
    const data=this.state.user.map((e)=>{
      return(
        <header className='header' key={e.id}>
      <img src={max} alt=""/>
      <p>{e.name}</p>
      <span className='status'>{e.status}</span>
      <span className='reply' onClick={this.ShowReplyField} >Reply</span>
      
      
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
        <textarea onChange={this.SaveComment}/>
      <button className="reply-button" onClick={this.AddReply}>Reply</button>
        </div>
        </div>
    )
  }
}
export default Second;