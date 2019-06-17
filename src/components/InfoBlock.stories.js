import React from 'react';

import {storiesOf} from '@storybook/react';

import Component from './InfoBlock';

export const props = {
  id: 12,
  name: 'butterfree',
  height: 11,
  weight: 320,
  abilities: [
    {
      'ability': {
        'name': 'tinted-lens',
        'url': 'https://pokeapi.co/api/v2/ability/110/'
      },
      'is_hidden': true,
      'slot': 3
    },
    {
      'ability': {
        'name': 'compound-eyes',
        'url': 'https://pokeapi.co/api/v2/ability/14/'
      },
      'is_hidden': false,
      'slot': 1
    }
  ],
  sprites: {
    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png',
    back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/12.png',
    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/12.png',
    back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/12.png',
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
    front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/12.png',
    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/12.png',
    front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/12.png'
  },
  types: [
    {
      slot: 2,
      type: {
        name: 'flying',
        url: 'https://pokeapi.co/api/v2/type/3/'
      }
    },
    {
      'slot': 1,
      'type': {
        'name': 'bug',
        'url': 'https://pokeapi.co/api/v2/type/7/'
      }
    }
  ],
  description: 'Pokem ipsum dolor sit amet they\'re comfy and easy to wear Bellsprout Tranquill Gyarados Castform Charmander. Dragon Rage Steel Roggenrola Body Slam Swablu Badge Manaphy. Ice Shieldon Gurdurr Steel Ferrothorn Electrode Strength. Blastoise Shuckle Magby Cobalion Paras Spoink Wartortle. Team Rocket Mineral Badge Lopunny Rayquaza Camerupt Bisharp Fog Badge.'
};

storiesOf('InfoBlock', module)
    .add('default', () => <Component pokeId={props.id} pokeInfo={props}/>)
    .add('no info', () => <Component/>);

storiesOf('InfoBlock - window width', module)
    .add('default',
        () => <div style={{width: 'initial', border: 'solid gray 1px'}}>
          <Component pokeId={props.id} pokeInfo={props}/></div>)
    .add('no info',
        () => <div style={{width: 'initial', border: 'solid gray 1px'}}>
          <Component/></div>);

storiesOf('InfoBlock - 10% width', module)
    .add('default',
        () => <div style={{width: '10%', border: 'solid gray 1px'}}><Component
            pokeId={props.id} pokeInfo={props}/></div>)
    .add('no info',
        () => <div style={{width: '10%', border: 'solid gray 1px'}}><Component/>
        </div>);

storiesOf('InfoBlock - 100px width', module)
    .add('default',
        () => <div style={{width: '100px', border: 'solid gray 1px'}}><Component
            pokeId={props.id} pokeInfo={props}/></div>)
    .add('no info',
        () => <div style={{width: '100px', border: 'solid gray 1px'}}>
          <Component/></div>);

storiesOf('InfoBlock - 50px width', module)
    .add('default',
        () => <div style={{width: '50px', border: 'solid gray 1px'}}><Component
            pokeId={props.id} pokeInfo={props}/></div>)
    .add('no info',
        () => <div style={{width: '50px', border: 'solid gray 1px'}}>
          <Component/></div>);
