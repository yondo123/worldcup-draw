import {Teams} from '../types';

const ADD_TEAM = 'addteam' as const;
const DELETE_TEAM = 'deleteteam' as const;

export const addTeam = (data: Teams) => {
    return {
        type: ADD_TEAM,
        data
    };
};

export const removeTeam = (data: string) => {
    return {
        type: DELETE_TEAM,
        data
    };
};
