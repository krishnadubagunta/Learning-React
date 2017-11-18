import React, {Component} from 'react';
import CommentList from './comment_threads.js'


class Comments extends Component{
  constructor(props) {
    super(props);
    const comments = props.comments;
    this.state = {
      comments : comments,
      commentList : []
    };
  }

  componentWillReceiveProps({comments}){
      this.setState({
        comments, commentList : []
      },() => {
        this.state.comments.map( (comment) => {
          return (
            this._generateCommentList(comment).then(commentList => {
              let newCommentList = this.state.commentList.slice()
              newCommentList.push(commentList);
              this.setState({
                commentList : newCommentList
              });
            })
          );
        });
      });

  }

  _generateCommentList(comment) {
      return new Promise(function(resolve){
          const elem = <CommentList key={comment.id} comment={comment.snippet.topLevelComment.snippet} />
          resolve(elem);
      });
  }

  render() {
    return (
      <div>
        <ul className = {this.props.className}>
          {this.state.commentList}
        </ul>
      </div>
    );
  }
}

export default Comments;
