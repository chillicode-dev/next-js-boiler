// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import {connectMobX} from '@/store';
import style from './style.module.scss';

function ExamplePostsSection({className, store}) {
  return (
    <ul className={cn(style.ExamplePostsSection, className)}>
      {store.posts.posts.map(post => (
        <li key={post.id}>
          <button className={style.button} onClick={() => store.posts.removePost(post)}>
            Удалить
          </button>
          <span>{post.title}</span>
        </li>
      ))}
    </ul>
  );
}

ExamplePostsSection.defaultProps = {
  className: '',
};

ExamplePostsSection.propTypes = {
  className: PropTypes.string,
  store: PropTypes.object,
};

export default connectMobX(ExamplePostsSection);
