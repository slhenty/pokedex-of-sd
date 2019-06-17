import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BagSelector = (props) => {

  const [inBag, setInBag] = useState(props.inBag);

  function handleCheck () {
    setInBag(!inBag);
  }

  return (
      <div className={'pd-bag-selector'}>
        <div className={'pd-field'}>
          <label>In Bag
            <input type='checkbox' className={'pd-checkbox'}
                   defaultChecked={inBag} onChange={handleCheck}/>
          </label>
        </div>
      </div>
  );
};

BagSelector.propTypes = {
  pokeId: PropTypes.number.isRequired
};

export default BagSelector;
