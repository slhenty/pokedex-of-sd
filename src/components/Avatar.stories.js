import React from 'react';

import { storiesOf } from '@storybook/react';

import Avatar from './Avatar';
import logo from '../logo.svg';

const avatar = {
  name: 'My Pokemon',
  image: logo
};

storiesOf('Avatar', module)
    .add('default', () => <Avatar {...avatar} />)
    .add('no image', () => <Avatar name={avatar.name} />)
    .add('no name', () => <Avatar image={avatar.image} />)
    .add('no data', () => <Avatar />);
