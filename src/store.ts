import {combineReducers} from 'redux';
import teamsReducer from './reducers/teams';

const rootReducer = combineReducers({
    teamsReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
