import {combineReducers} from 'redux';
import teamList from './reducers/teams';
import Pots from './reducers/pots';

const rootReducer = combineReducers({
    teamList,
    Pots
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
