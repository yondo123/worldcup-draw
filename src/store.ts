import {combineReducers} from 'redux';
import teamReducer from './reducers/teams';
import potReducer from './reducers/pots';
import groupReducer from './reducers/groups';
import continentReducer from './reducers/continents';

const rootReducer = combineReducers({
    teamReducer,
    potReducer,
    groupReducer,
    continentReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
