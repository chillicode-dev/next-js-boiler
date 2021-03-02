// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import cn from 'classnames';
// Internals
import style from './style.module.scss';

function PostsView({className, store}) {
  return (
    <ul className={cn(style.CommentsView, className)}>
      {store.posts.posts.map(post => (
        <li key={post.id}>
          <button onClick={() => store.posts.removePosts(post)}>Удалить</button>
          <span>{post.title}</span>
        </li>
      ))}
    </ul>
  );
}

PostsView.defaultProps = {
  className: '',
};

PostsView.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.array,
};

export default inject('store')(observer(PostsView));
