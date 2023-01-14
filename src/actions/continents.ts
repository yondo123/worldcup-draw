import {Continent} from '../types';

export const DECREASE_CONTINENT = 'continent/decreaseContinent' as const;

export const decreaseContinent = (data: Continent) => {
    return {
        type: DECREASE_CONTINENT,
        data
    };
};
