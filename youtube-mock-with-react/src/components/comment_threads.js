import React, {Component} from 'react';

class CommentList extends Component {
  constructor(props) {
    super(props);
    const comment = props.comment
    this.state = {
      comment
    }
    this.imagestyle = {
      width : '40px'
    }
  }

  componentWillReceiveProps({comment}){
    this.setState({
      comment
    });
    return true;
  }

  render() {
    return (
      <li className="lead uk-container uk-flex uk-padding-small uk-text-small">
        <div>
          <img alt="profilePicture" src={this.state.comment.authorProfileImageUrl} className="uk-border-circle uk-preserve-width" style={this.imagestyle}/>
        </div>
        <div className="uk-flex-block">
          <div className="uk-margin-small-left title">{this.state.comment.authorDisplayName}</div>
          <div className="uk-margin-small-left uk-margin-small-top">{this.state.comment.textOriginal}</div>
        </div>
      </li>
    );
  }

}

export default CommentList;
