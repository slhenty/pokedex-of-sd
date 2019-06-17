import React from 'react';
import PropTypes from 'prop-types';

const Avatar = (props) => {
  const image = props.sprites && (props.sprites.front_default || props.sprites.back_default);
  const { name='unknown' } = props;

  return (
      <figure className={'pd-avatar'}>
        <img className={'pd-avatar-image'}
             src={image}
             alt={`Pokemon: ${name}`}/>
        <figcaption className={'pd-avatar-caption'}>{name}
        </figcaption>
      </figure>
  );
};

Avatar.propTypes = {
  name: PropTypes.string,
  sprites: PropTypes.shape({
    back_default: PropTypes.string,
    front_default: PropTypes.string
  })
};

export default Avatar;
