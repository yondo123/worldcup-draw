import {Teams} from '../types';
import {ADD_TEAM_TO_GROUP, addTeamToGroup} from '../actions/groups';
type GroupsAction = ReturnType<typeof addTeamToGroup>;
type GroupsType = {
    A: Teams;
    B: Teams;
    C: Teams;
    D: Teams;
    E: Teams;
    F: Teams;
    G: Teams;
    H: Teams;
};

const initialGroups: GroupsType = {
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
    H: []
};

const groupReducer = (prevState: GroupsType = initialGroups, action: GroupsAction) => {
    switch (action.type) {
        case ADD_TEAM_TO_GROUP:
            return {...prevState, [action.data.group]: [...prevState[action.data.group], action.data.team]};
        default:
            return prevState;
    }
};

export default groupReducer;
