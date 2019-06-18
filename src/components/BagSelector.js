import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {createSlice} from 'redux-starter-kit';
import {
  pull as _pull,
  includes as _includes,
    upperFirst as _upperFirst
} from 'lodash';

const BagSelector = (props) => {

  const [inBag, setInBag] = useState(props.inBag);

  function handleCheck() {
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

// App Store
// pokeBag slice
export const slice = createSlice({
  slice: 'pokeBag',
  initialState: [],
  reducers: {
    'add': (state, action) => {
      const pokeId = action.payload;
      _pull(state, pokeId).push(pokeId);
    },
    'remove': (state, action) => {
      const pokeId = action.payload;
      _pull(state, pokeId);
    }
  }
});

slice.selectors.isInBag = (pokeId) => (state) => {
  const sliceName = slice.slice;
  const selectorName = `get${_upperFirst(sliceName)}`;
  const wholeSelector = slice.selectors[selectorName];
  const bag = wholeSelector(state);
  return _includes(bag, pokeId);
};
