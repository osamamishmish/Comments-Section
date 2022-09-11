import React, { Component } from 'react';
import "./First.css";
import emy from "../../Images/image-amyrobson.png";
import julio from "../../Images/image-juliusomo.png";
import $ from "jquery";
import Comment from './Comment';
import Reply from "../../Icons/icon-reply.svg";


class First extends Component {
  state={
    user:[
      {
        id:0,
        name:"amyrobson",
        status:"1 month ago",
        comment:"You've nailed the design and the responsiveness at various breakpoints works really well.Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. "
      }
    ] ,
    reply:[],
    tag:"@amyrobson, "
    
    
    
  }
  Reply=[];
  Sentence;
  theTag;
  time;
  ShowField=()=>{
    $(".reply-field").toggleClass("show-field");
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
  $(".reply-field").toggleClass("show-field");
  }
  
  render() {
    const data=this.state.user.map((e)=>{
      return(


      
      <header className='header' key={e.id}>
      <img src={emy} alt=""/>
      <p>{e.name}</p>
      <span className='status'>{e.status}</span>
      <span className='reply' onClick={this.ShowField}><img src={Reply} alt="" />Reply</span>
      
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
        <div className='reply-field'>
        <img src={julio} alt=""/>
        <textarea className='commented' onChange={this.SaveComment}/>
        
        <button onClick={this.AddAsReply}>Reply</button>
        </div>
      )
    
    return (
      <div className="first-section">

      <div className='first-comment'>
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
export default First;