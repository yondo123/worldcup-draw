import {continents} from '../../constants';
import React from 'react';
import useSelect from './useSelect';

const SelectContinent = () => {
    const {handleChangeContinent} = useSelect();

    return (
        <div className="select-wrap">
            <label htmlFor="country">
                <strong>Continent</strong>
            </label>
            <select id="country" onChange={handleChangeContinent}>
                {continents.map((continent) => {
                    return (
                        <option key={continent.code} value={continent.code}>
                            {continent.name} ({continent.code.toUpperCase()})
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default SelectContinent;
