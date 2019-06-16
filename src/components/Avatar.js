import React from 'react';
import PropTypes from 'prop-types';

const Avatar = (props) => {

  // TODO: add default value for name, but prolly not here...
  //  perhaps in the connected container or the app state selector
  return (
      <React.Fragment>
        <figure className={'pd-avatar'}>
          <img className={'pd-avatar-image'}
               src={props.image}
               alt={'(Pokemon avatar, centered)'}/>
          <figcaption className={'pd-avatar-caption'}>{props.name}
          </figcaption>
        </figure>
      </React.Fragment>
  );
};

Avatar.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
};

export default Avatar;
