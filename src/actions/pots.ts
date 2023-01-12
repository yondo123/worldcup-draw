import {Pot, Team} from '../types';

export const SET_POT = 'pot/setPot' as const;
export const DELETE_TEAM_FROM_POT = 'pot/deleteTeamFromPot' as const;
export const ADD_TEAM_TO_POT = 'pot/addTeamToPot' as const;

export const setPot = (data: Pot) => {
    return {type: SET_POT, data};
};

export const deleteTeamFromPot = (data: number) => {
    return {type: DELETE_TEAM_FROM_POT, data};
};

export const addTeamToPot = (data: Team) => {
    return {type: ADD_TEAM_TO_POT, data};
};
