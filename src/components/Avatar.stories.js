import React from 'react';

import { storiesOf } from '@storybook/react';

import Component from './Avatar';
import { props as InfoBlockProps } from './InfoBlock.stories';

const props = {
  name: InfoBlockProps.name,
  sprites: InfoBlockProps.sprites
};

storiesOf('Avatar', module)
    .add('default', () => <Component {...props} />)
    .add('no image', () => <Component name={props.name} />)
    .add('no name', () => <Component sprites={props.sprites} />)
    .add('no data', () => <Component />);
