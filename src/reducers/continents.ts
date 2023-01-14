import {DECREASE_CONTINENT, decreaseContinent} from '../actions/continents';
import continents from '../constants/continents';
import {Continent} from '../types';

type ContinentsAction = ReturnType<typeof decreaseContinent>;
type ContinentLimit = {[key in Continent]: number};

const initialContinentLimit: ContinentLimit = <ContinentLimit>{
    [continents[0].code]: continents[0].numberOfEntries,
    [continents[1].code]: continents[1].numberOfEntries,
    [continents[2].code]: continents[2].numberOfEntries,
    [continents[3].code]: continents[3].numberOfEntries,
    [continents[4].code]: continents[4].numberOfEntries,
    [continents[5].code]: continents[5].numberOfEntries
};

const continentReducer = (prevState = initialContinentLimit, action: ContinentsAction) => {
    switch (action.type) {
        case DECREASE_CONTINENT:
            return {...prevState, [action.data]: --prevState[action.data]};
        default:
            return prevState;
    }
};

export default continentReducer;
