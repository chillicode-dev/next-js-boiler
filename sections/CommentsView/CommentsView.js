// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import cn from 'classnames';
// Internals
import style from './style.module.scss';

function CommentsView({className, store}) {
  const {comments} = store.comments;

  return (
    <ul className={cn(style.CommentsView, className)}>
      {comments.map(comment => (
        <li key={comment.id}>
          <button onClick={comment.remove}>Удалить</button>
          <span>{comment.body}</span>
        </li>
      ))}
    </ul>
  );
}

CommentsView.defaultProps = {
  className: '',
};

CommentsView.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.array,
};

export default inject('store')(observer(CommentsView));
