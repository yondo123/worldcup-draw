import teams from '../constants/teams';
import {addTeam, removeTeam, ADD_TEAM, DELETE_TEAM} from '../actions/teams';
import {Teams} from '../types';

type TeamsAction = ReturnType<typeof addTeam> | ReturnType<typeof removeTeam>;

const teamReducer = (prevState: Teams = teams, action: TeamsAction) => {
    switch (action.type) {
        case ADD_TEAM:
            return [...prevState, action.data];
        case DELETE_TEAM:
            return prevState.filter(({code}) => code !== action.data.code);
        default:
            return prevState;
    }
};

export default teamReducer;
