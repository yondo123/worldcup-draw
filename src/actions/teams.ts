import {Team} from '../types';

export const ADD_TEAM = 'team/addteam' as const;
export const DELETE_TEAM = 'team/deleteteam' as const;

export const addTeam = (data: Team) => {
    return {
        type: ADD_TEAM,
        data
    };
};

export const removeTeam = (data: Team) => {
    return {
        type: DELETE_TEAM,
        data
    };
};
