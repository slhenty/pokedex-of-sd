import React from 'react';

import {storiesOf} from '@storybook/react';

import Component from './AbilitiesBlock';
import { props as InfoBlockProps } from './InfoBlock.stories';

const props = {
  id: InfoBlockProps.id,
  abilities: InfoBlockProps.abilities
};

storiesOf('AbilitiesBlock', module)
    .add('default', () => <Component pokeId={props.id} pokeInfo={props}/>)
    .add('no info', () => <Component/>);

storiesOf('AbilitiesBlock - window width', module)
    .add('default',
        () => <div style={{width: 'initial', border: 'solid gray 1px'}}>
          <Component pokeId={props.id} pokeInfo={props}/></div>)
    .add('no info',
        () => <div style={{width: 'initial', border: 'solid gray 1px'}}>
          <Component/></div>);

storiesOf('AbilitiesBlock - 10% width', module)
    .add('default',
        () => <div style={{width: '10%', border: 'solid gray 1px'}}><Component
            pokeId={props.id} pokeInfo={props}/></div>)
    .add('no info',
        () => <div style={{width: '10%', border: 'solid gray 1px'}}><Component/>
        </div>);

storiesOf('AbilitiesBlock - 100px width', module)
    .add('default',
        () => <div style={{width: '100px', border: 'solid gray 1px'}}><Component
            pokeId={props.id} pokeInfo={props}/></div>)
    .add('no info',
        () => <div style={{width: '100px', border: 'solid gray 1px'}}>
          <Component/></div>);

storiesOf('AbilitiesBlock - 50px width', module)
    .add('default',
        () => <div style={{width: '50px', border: 'solid gray 1px'}}><Component
            pokeId={props.id} pokeInfo={props}/></div>)
    .add('no info',
        () => <div style={{width: '50px', border: 'solid gray 1px'}}>
          <Component/></div>);
