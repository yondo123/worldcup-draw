import {ADD_TEAM_TO_POT, addTeamToPot} from '../actions/pots';

type PotsAction = ReturnType<typeof addTeamToPot>;

const pots = (prevState = [], action: PotsAction) => {
    switch (action.type) {
        case ADD_TEAM_TO_POT:
            return [...prevState, action.data];
        default:
            return prevState;
    }
};

export default pots;
