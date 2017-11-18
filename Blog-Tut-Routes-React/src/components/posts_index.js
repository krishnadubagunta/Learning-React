import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPostsList() {
    return(
      _.map(this.props.posts, post => {
        return(
          <li className="list-group-item" key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        )
      })
    );
  }

  render() {
    return(
      <div className="p-3 header-class container-fluid">
        <div className="jumbotron">
          <div className="container">
            <div className="col-sm-1">
              <img className="rounded-circle" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/13512242_1745734148977843_2179381003112438094_n.jpg?oh=f97cc6ccf3cfbf017d81bb80815aa07c&oe=5A1B07DD" alt="profile" />
            </div>
            <div className="col-sm-10">
              <h1 className="shrink-text">Krishna Dubagunta</h1>
            </div>
            <div className="col-sm-1">
              <Link className="btn btn-success" to="/posts/new">New Post</Link>
            </div>
          </div>
        </div>
        <ul className="list-group">
          {this.renderPostsList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {posts : state.posts};
}

export default connect(mapStateToProps,{ fetchPosts })(PostsIndex);
