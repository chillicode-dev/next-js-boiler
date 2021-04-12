import PropTypes from 'prop-types';
import cn from 'classnames';

import {connectMobX} from '@/mobx/utils/hocs';
import style from './style.module.scss';

function ExampleCommentsSection({className, store}) {
  // Store
  const {commentsStore} = store;

  return (
    <ul className={cn(style.ExampleCommentsSection, className)}>
      {commentsStore.comments.map(comment => (
        <li key={comment.id}>
          <button onClick={comment.delete}>Удалить</button>
          <span>{comment.body}</span>
        </li>
      ))}
    </ul>
  );
}

ExampleCommentsSection.defaultProps = {
  className: '',
};

ExampleCommentsSection.propTypes = {
  className: PropTypes.string,
  store: PropTypes.object,
};

export default connectMobX(ExampleCommentsSection);
