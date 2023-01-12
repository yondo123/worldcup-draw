import {SET_POT, setPot, DELETE_TEAM_FROM_POT, deleteTeamFromPot, ADD_TEAM_TO_POT, addTeamToPot} from '../actions/pots';
import {Pot, Teams} from '../types';
import {pots} from '../constants';

type PotsAction = ReturnType<typeof setPot> | ReturnType<typeof deleteTeamFromPot> | ReturnType<typeof addTeamToPot>;
type PotsType = {
    currentPot: Pot;
    teams: Teams;
};
const initialPots: PotsType = {
    currentPot: pots[0],
    teams: []
};
const potsReducer = (prevState = initialPots, action: PotsAction) => {
    switch (action.type) {
        case SET_POT:
            return {...prevState, currentPot: action.data};
        case DELETE_TEAM_FROM_POT:
            return {...prevState, teams: prevState.teams.filter((item, index) => index !== action.data)};
        case ADD_TEAM_TO_POT:
            return {...prevState, teams: [...prevState.teams, action.data].sort(() => Math.random() - 0.5)};
        default:
            return prevState;
    }
};

export default potsReducer;
