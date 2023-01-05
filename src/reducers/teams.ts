import teams from '../constants/teams';
import {addTeam, removeTeam} from '../actions/teams';
import {Teams} from '../types';

type TeamsAction = ReturnType<typeof addTeam> | ReturnType<typeof removeTeam>;

const teamsReducer = (prevState: Teams = teams, action: TeamsAction) => {
    switch (action.type) {
        case 'addteam':
            return [...prevState, action.data];
        case 'deleteteam':
            return prevState.filter(item => {
                return item.code !== action.data;
            });
        default:
            return prevState;
    }
};

export default teamsReducer;
