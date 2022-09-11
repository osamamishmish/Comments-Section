import React, { Component } from 'react'
import max from "../../Images/image-maxblagun.png";
import julio from "../../Images/image-juliusomo.png";
import "./Second.css";
import $ from "jquery";
import Reply from "../../Icons/icon-reply.svg";
import Comment from './Comment';

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
    reply:[],
    tag:"@maxblagun, "
    
    
    
  }
  Reply=[];
  Sentence;
  theTag;
  time;
  ShowField=()=>{
    $(".second-reply-field").toggleClass("show-field");
  }
  SaveComment=(e)=>{
   
      this.Sentence=e.target.value
  }
  AddAsReply=()=>{
    this.time=new Date();
    this.Reply.push({
      comment:this.Sentence,
      id:this.Reply.length,
      img:    julio,
      time:this.time
    })
    
    this.setState({
      reply:this.Reply
    })
    
    console.log(this.state.reply)
    
  $(".commented").val("");
  $(".second-reply-field").toggleClass("show-field");
  }
  
  render() {
    const data=this.state.user.map((e)=>{
      return(


      
      <header className='second-header' key={e.id}>
      <img src={max} alt=""/>
      <p>{e.name}</p>
      <span className='status'>{e.status}</span>
      <span className='second-reply' onClick={this.ShowField}><img src={Reply} alt="" />Reply</span>
      
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
    const field=
      (
        <div className='second-reply-field'>
        <img src={julio} alt=""/>
        <textarea className='commented' onChange={this.SaveComment}/>
        
        <button onClick={this.AddAsReply}>Reply</button>
        </div>
      )
    
    return (
      <div className="second-section">

      <div className='second-comment'>
          {data}
          {comment}
      </div>
      <div className='text-container'>
      <Comment replies={this.state} />
      </div>
          {field}
          
      </div>
    )
  }
}
export default Second;