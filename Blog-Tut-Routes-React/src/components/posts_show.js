import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {

    this.props.deletePost(this.props.post.id,() => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return (
        <div>
          Loading
        </div>
      );
    }

    return(
      <div className="container-fluid">
        <div className="justify-content-md-center">
          <Link className="btn btn-info" to="/">Back To Index</Link>
          <button
            className="btn btn-danger pull-xs-right"
            onClick = {this.onDeleteClick.bind(this)}
          >
          Delete Posts
          </button>
        </div>
        <div className="row justify-content-center centered-div">
          <div className="col-4">
            <h3>{post.title}</h3>
            <h6>Categories : {post.categories}</h6>
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post : posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
