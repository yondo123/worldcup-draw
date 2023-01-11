import {Priority, Team} from '../types';

export const ADD_TEAM_TO_POT = 'pot/addTeamToPot' as const;

export const addTeamToPot = (data: {pot: Priority; team: Team}) => {
    return {
        type: ADD_TEAM_TO_POT,
        data
    };
};
