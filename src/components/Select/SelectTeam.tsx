import React from 'react';
import useSelect from './useSelect';

const SelectTeam = () => {
    const {handleChangeTeam, continentLimit, continent, teams} = useSelect();

    return (
        <div className="select-wrap">
            <label htmlFor="country">
                <strong>Country</strong>
            </label>
            <select id="country" onChange={handleChangeTeam} disabled={continentLimit[continent] < 1}>
                {teams
                    .filter((team) => team.continent === continent)
                    .map((team) => {
                        return (
                            <option key={team.code} value={team.code}>
                                {team.name}
                            </option>
                        );
                    })}
            </select>
        </div>
    );
};

export default SelectTeam;
