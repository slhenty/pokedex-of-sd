import React from 'react';
import PropTypes from 'prop-types';

const AbilitiesBlock = (props) => {
  const {pokeInfo} = props;

  const abilities = () => (
      <React.Fragment>
        {
          pokeInfo.abilities.map((ability) => (
              <div className={'pd-ability'}>
                <span>{ability.ability.name}</span>
                <a href={ability.ability.url}>json</a>
              </div>
          ))
        }
      </React.Fragment>
  );

  // This can be extracted to its own Component
  const NoInfo = () => (
      <div className={'pd-no-info'}>None</div>
  );

  const Abilities = pokeInfo ? abilities : NoInfo;

  return (
      <div className={'pd-abilities'}>
        <label>Abilities</label>
        <Abilities/>
      </div>
  );
};

AbilitiesBlock.propTypes = {
  pokeId: PropTypes.number,
  pokeInfo: PropTypes.shape({
    abilities: PropTypes.arrayOf(PropTypes.shape({
      ability: PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string
      })
    }))
  })
};

export default AbilitiesBlock;
