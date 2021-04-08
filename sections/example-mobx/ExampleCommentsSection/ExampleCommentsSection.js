// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import {connectMobX} from '@/store';
import style from './style.module.scss';

function ExampleCommentsSection({className, store}) {
  const {comments} = store.comments;

  return (
    <ul className={cn(style.ExampleCommentsSection, className)}>
      {comments.map(comment => (
        <li key={comment.id}>
          <button onClick={comment.remove}>Удалить</button>
          <span>{comment.body}</span>
        </li>
      ))}
    </ul>
  );
}

ExampleCommentsSection.defaultProps = {
  className: '',
  store: {},
};

ExampleCommentsSection.propTypes = {
  className: PropTypes.string,
  store: PropTypes.object,
};

export default connectMobX(ExampleCommentsSection);
