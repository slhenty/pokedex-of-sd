import {upperFirst as _upperFirst} from 'lodash';
import {slice} from './BagSelector';

describe('BagSelector', () => {
  const sliceName = 'pokeBag';

  it('has the correct slice name', () => {
    expect(slice.slice).toBe(sliceName);
  });

  describe('reducer', () => {
    let type;

    describe('add', () => {

      beforeEach(() => {
        type = `${sliceName}/add`;
      });

      it('can add to empty bag', () => {
        const state = [];
        const action = {
          type,
          payload: 99
        };
        const expected = [action.payload];

        expect(slice.reducer(state, action))
            .toEqual(expect.arrayContaining(expected));
      });

      it('can add to full bag', () => {
        const state = [97, 98, 100];
        const action = {
          type,
          payload: 99
        };
        const expected = [action.payload];

        expect(slice.reducer(state, action))
            .toEqual(expect.arrayContaining(expected));
      });

      it('can add to undefined bag', () => {
        const state = undefined;
        const action = {
          type,
          payload: 99
        };
        const expected = [action.payload];

        expect(slice.reducer(state, action))
            .toEqual(expect.arrayContaining(expected));
      });
    });

    describe('remove', () => {

      beforeEach(() => {
        type = `${sliceName}/remove`;
      });

      it('can remove from empty bag without throwing', () => {
        const state = [];
        const action = {
          type,
          payload: 99
        };
        const expected = [action.payload];

        expect(slice.reducer(state, action))
            .not.toEqual(expect.arrayContaining(expected));
      });

      it('can remove from full bag', () => {
        const state = [97, 98, 99, 100];
        const action = {
          type,
          payload: 99
        };
        const expected = [action.payload];

        expect(slice.reducer(state, action))
            .not.toEqual(expect.arrayContaining(expected));
      });

      it('can remove from undefined bag without throwing', () => {
        const state = undefined;
        const action = {
          type,
          payload: 99
        };
        const expected = [action.payload];

        expect(slice.reducer(state, action))
            .not.toEqual(expect.arrayContaining(expected));
      });
    });

  });

  describe('selector', () => {

    describe('whole slice', () => {
      let selectorName;
      let selector;

      beforeEach(() => {
        selectorName = `get${_upperFirst(sliceName)}`;
        selector = slice.selectors[selectorName];
      });

      it('selector exists', () => {
        expect(selector).toBeDefined();
      });

      it('can retrieve empty bag', () => {
        const expected = [];
        const state = {
          [sliceName]: expected
        };

        expect(selector(state)).toEqual(expected);
      });

      it('can retrieve full bag', () => {
        const expected = [97, 98, 99];
        const state = {
          [sliceName]: expected
        };

        expect(selector(state)).toEqual(expected);
      });

      it('can retrieve undefined bag when slice exists', () => {
        const expected = undefined;
        const state = {
          [sliceName]: expected
        };

        expect(selector(state)).toEqual(expected);
      });
    });

    describe('isInBag', () => {
      let selectorName;
      let selector;

      beforeEach(() => {
        selectorName = `isInBag`;
        selector = slice.selectors[selectorName];
      });

      it('selector exists', () => {
        expect(selector).toBeDefined();
      });

      it('returns true for existing id', () => {
        const state = {
          [sliceName]: [97, 98, 99]
        };
        const id = 99;
        const expected = true;

        expect(selector(id)(state)).toEqual(expected);
      });

      it('returns false for missing id', () => {
        const state = {
          [sliceName]: [97, 98]
        };
        const id = 99;
        const expected = false;

        expect(selector(id)(state)).toEqual(expected);
      });

      it('returns false for undefined id', () => {
        const state = {
          [sliceName]: [97, 98, 99]
        };
        const expected = false;

        expect(selector()(state)).toEqual(expected);
      });

      it('returns false for empty bag', () => {
        const state = {
          [sliceName]: []
        };
        const id = 99;
        const expected = false;

        expect(selector(id)(state)).toEqual(expected);
      });

      it('returns false for undefined bag', () => {
        const state = {
          [sliceName]: undefined
        };
        const id = 99;
        const expected = false;

        expect(selector(id)(state)).toEqual(expected);
      });
    });
  });
});
