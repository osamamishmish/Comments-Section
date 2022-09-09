import React ,{Component} from "react";
import "./Comment.css";
import $ from "jquery";
import Moment from 'react-moment';
import Delete from "../../Icons/icon-delete.svg";
import Edit from "../../Icons/icon-edit.svg";
class Comment extends Component{

theIndex;
theTag;
theText;
    editComment=(e)=>{
        
        this.theIndex=e.target;
         this.theTag=$(this.theIndex).parent().parent().parent().children().eq(1).children().eq(0).text();
            this.theText=$(this.theIndex).parent().parent().parent().children().eq(1).children().eq(1).text();
        $(this.theIndex).parent().parent().parent().children().eq(1).toggleClass("hide-comment")
        $(this.theIndex).parent().parent().parent().children().eq(2).toggleClass("show-edit-area")
        $(this.theIndex).parent().parent().parent().children().eq(2).children().eq(0).text(this.theTag+this.theText)
        
     }

     updateComment=()=>{
        $(this.theIndex).parent().parent().parent().children().eq(1).children().eq(0).text(this.theTag)
        $(this.theIndex).parent().parent().parent().children().eq(1).children().eq(1).text($(this.theIndex).parent().parent().parent().children().eq(2).children().eq(0).val())
        $(this.theIndex).parent().parent().parent().children().eq(1).toggleClass("hide-comment");
        $(this.theIndex).parent().parent().parent().children().eq(2).toggleClass("show-edit-area");
       
     }
     deleteComment=(e)=>{
        this.theIndex=e.target
        $(this.theIndex).parent().parent().parent().remove()
     }
        render(){

        
        const textedReplies=this.props.replies.reply.map((e)=>{
            
            return(
                e.comment!==""?
                        
                <div className="texted-reply" key={e.id}>
                <div className="reply-header">
                <img src={e.img} alt="" />
                <span className="user-name">juliusomo</span>
                <button className="you">you</button>
                <span className="time"><Moment fromNow ago>{e.time}</Moment></span>
                <div className="button-container"> 
                <button className="delete-button" onClick={this.deleteComment}><img src={Delete} alt="" />Delete</button>
                <button className="edit-button" onClick={this.editComment}><img src={Edit} alt="" />Edit</button>
                </div>
                

                </div>
                
                <div className="text">
                <p className="tag">{this.props.replies.tag}</p>
                <p className="texted-comment">{e.comment}</p>
                </div>
                <div className="edit">
                <textarea />
                <button onClick={this.updateComment}>Update</button>
                </div>
                
                
                
                </div> :null
            )
        })
        return(
            <div className="comments-container">
            {textedReplies}
           
            </div>
        )
    }
}

export default Comment;