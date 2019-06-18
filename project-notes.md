# Project Notes

## Project Libs / Assets

<details><summary>Primary</summary>

- CRA2 (gets CSS, babel, webpack, Jest, etc... mostly 'for free')
- storybook (iterate / test over UIs in TDD/CDD mode w/o API deps)
- redux - use the redux-starter-kit... much more compact (or zero) boilerplate
</details>

<details><summary>Optional</summary>

- redux-saga - only if we need it
- enzyme - if rendered unit test are useful beyond storybook capabilities
- router - if conditional rendering between Main vs Detail starts to feel hacky
- browser-side cache (lib TBD) - if redux states or localStorage start to get brittle
</details>

<details><summary>Root Configs</summary>

(adjust or create as necessary)

- .gitignore
- .editorconfig
- .babelrc
</details>

## Risks
- limited familiarity with Google Maps
- limited familiarity with standing up Enzyme test framework (if it becomes necessary)


## Implementation Plan
### Project standup
- [x] CRA2 seed
- [x] .gitignore adjustment (keep that repo we create clean from the outset) - DONE
- [x] storybook
- [x] redux


### UI Components
#### Write storybook 'stories'
This hierarchy proposes the UI components that will compose to form the views

- [ ] Detail Page
    - [x] Avatar - ui
    - [x] Info Block - ui
    - [x] Abilities Block - ui
    - [ ] Bag Selector - WIP (~~ui~~, ~~action/reducer/selector~~, connect, localStorage)
    - [ ] Map (w/pin)
- [ ] Main Page
    - [ ] Gallery Actions
        - [ ] Filter buttons
        - [ ] Search box
    - [ ] Gallery
        - [ ] Avatar buttons

#### Write React components
- focus on layout
- focus on state / props variations (from storybook)

### Data Management
The following 'tasks' can be done per relevant UI component (vertical slice), or per data layer (service slices). Preferred is per UI component, except in case the relevant functionality is widely shared across components from the outset.

#### App Store
- Write Redux tests
    - focus on reducers and app state
- Write Reducers/Actions/Selectors
    - use redux-starter-kit

#### API / Side-effect Integration
- Write Saga tests
    - focus on API calls
    - focus on localStorage updates
- Write Sagas


## Technical Notes

Initial thoughts on how the App store should be structured

```
{
    pokeAll: [      // all known pokemon IDs
        pokeID
        ...
    ],
    pokeBag: [      // pokemon IDs saved in the 'bag'
        pokeID
        ...
    ],
    pokeList: [     // pokemon IDs to display in the main gallery
        pokeID
        ...
    ],
    pokemon: {      // ID and location of pokemon shown on detail page
        id: pokeID,
        location: {
            lat: Number,
            long: Number
        }
    },
    pokeInfo: {     // cached pokemon characteristics, keyed on pokemon ID
        id: {...},
        ...
    }    
}
```

- **pokeAll** will be read from the API any time the list cannot be found in sessionStorage, and then stored there
    - main page will refresh the app store from sessionStorage (via a saga)
    - may also set pokeInfo in sessionStorage if the complete Info dictionary is part of the response
- **pokeBag** will be read from localStorage
    - main page will refresh the app store from localStorage (via a saga)
- **pokeList** will be set from a combination of
    - the filter setting (retrieving either pokeAll or pokeBag from the store)
    - the search term
- **pokeInfo** will be read from the API any time the dictionary cannot be found in sessionStorage, and then stored there
    - detail page will refresh the app store from sessionStorage (via a saga)
    - may also set pokeAll in sessionStorage if part of the API response
- **pokemon**
    - id is set at time of selection in main page gallery
    - location is read from the API each time the detail page loads (via a saga)
