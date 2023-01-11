import {ADD_TEAM_TO_POT, addTeamToPot} from '../actions/pots';
import {Teams} from '../types';

type PotsAction = ReturnType<typeof addTeamToPot>;
type PotsType = {
    first: Teams;
    second: Teams;
    third: Teams;
    fourth: Teams;
};
const initialPots: PotsType = {
    first: [],
    second: [],
    third: [],
    fourth: []
};
const pots = (prevState = initialPots, action: PotsAction) => {
    switch (action.type) {
        case ADD_TEAM_TO_POT:
            return {...prevState, [action.data.pot]: [...prevState[action.data.pot], action.data.team]};
        default:
            return prevState;
    }
};

export default pots;
