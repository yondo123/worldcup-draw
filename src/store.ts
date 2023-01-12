import {combineReducers} from 'redux';
import teamReducer from './reducers/teams';
import potReducer from './reducers/pots';
import groupReducer from './reducers/groups';

const rootReducer = combineReducers({
    teamReducer,
    potReducer,
    groupReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
