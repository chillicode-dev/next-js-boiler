// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import {connectMobX} from '@/stores';
import style from './style.module.scss';

function PostsView({className, store}) {
  return (
    <ul className={cn(style.CommentsView, className)}>
      {store.posts.posts.map(post => (
        <li key={post.id}>
          <button onClick={() => store.posts.removePost(post)}>Удалить</button>
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
  store: PropTypes.object,
};

export default connectMobX('store', PostsView);
