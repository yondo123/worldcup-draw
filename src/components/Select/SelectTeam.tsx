import {continents} from '../../constants';
import React, {useState} from 'react';
import {Continent, Team, Teams} from '../../types';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

const SelectTeam = () => {
    const continentLimit = useSelector((state: RootState) => state.continentReducer);
    const teams: Teams = useSelector((state: RootState) => state.teamReducer);
    const [continent, setContinent] = useState(continents[0].code);
    const [team, setTeam] = useState(teams[0]);
    const handleChangeTeam = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const {value} = e.target;
        const selectTeam = teams.find((item) => item.code === value);
        setTeam(selectTeam as Team);
    };

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
