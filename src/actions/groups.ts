import {Group, Team} from '../types';
export const ADD_TEAM_TO_GROUP = 'group/addTeamToGroup' as const;
export const addTeamToGroup = (data: {team: Team; group: Group}) => {
    return {type: ADD_TEAM_TO_GROUP, data};
};
