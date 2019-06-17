import React from 'react';

import { storiesOf } from '@storybook/react';

import Component from './BagSelector';
import { props as InfoBlockProps } from './InfoBlock.stories';

const props = {
  id: InfoBlockProps.id
};

storiesOf('BagSelector', module)
    .add('default (inBag false)', () => <Component {...props} />)
    .add('inBag true', () => <Component {...props} inBag />);
