import React from 'react';
import PropTypes from 'prop-types';

const InfoBlock = (props) => {
  const { pokeInfo } = props;

  const info = () => (
      <React.Fragment>
        <div className={'pd-field'}>
          <label>Height</label>
          <p className={'pd-field-value'}>{pokeInfo.height}</p>
        </div>
        <div className={'pd-field'}>
          <label>Weight</label>
          <p className={'pd-field-value'}>{pokeInfo.weight}</p>
        </div>

        <div className={'pd-types'}>
          {
            pokeInfo.types.map((type) => (
                <div key={type.slot} className={'pd-type'}>{type.type.name}</div>
            ))
          }
        </div>

        <div className={'pd-description'}>
          {pokeInfo.description}
        </div>
      </React.Fragment>
  );

  // This can be extracted to its own Component
  const NoInfo = () => (
      <div className={'pd-no-info'}>No information available</div>
  );

  const Info = pokeInfo ? info : NoInfo;

    return (
        <div className={'pd-info'}>
          <Info/>
        </div>
    );
};

InfoBlock.propTypes = {
  pokeId: PropTypes.number,
  pokeInfo: PropTypes.shape({
    height: PropTypes.number,
    weight: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string
      })
    }))
  })
};

export default InfoBlock;
