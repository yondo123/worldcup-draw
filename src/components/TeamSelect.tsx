import React, {useState, useEffect} from 'react';
import {continents} from '../constants';
import {Continent, Team, Teams} from '../types';
import ButtonAddPot from './ButtonAddPot';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

const TeamSelect = () => {
    const teams: Teams = useSelector((state: RootState) => state.teamList);
    const [continent, setContinent] = useState(continents[0].code);
    const [team, setTeam] = useState(teams[0]);

    useEffect(() => {
        const firstTeam = teams.find((team) => team.continent === continent);
        setTeam(firstTeam || teams[0]);
    }, [continent, teams]);

    const handleChangeContinent = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const {value} = e.target;
        setContinent(value as Continent);
    };

    const handleChangeTeam = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const {value} = e.target;
        const selectTeam = teams.find((item) => item.code === value);
        setTeam(selectTeam as Team);
    };

    return (
        <section className="filter">
            <div className="select-wrap">
                <label htmlFor="country">
                    <strong>Continent</strong>
                </label>
                <select id="country" onChange={handleChangeContinent}>
                    {continents.map((item) => {
                        return (
                            <option key={item.code} value={item.code}>
                                {item.name} ({item.code.toUpperCase()})
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className="select-wrap">
                <label htmlFor="country">
                    <strong>Country</strong>
                </label>
                <select id="country" onChange={handleChangeTeam}>
                    {teams
                        .filter((team) => team.continent === continent)
                        .map((item) => {
                            return (
                                <option key={item.code} value={item.code}>
                                    {item.name}
                                </option>
                            );
                        })}
                </select>
            </div>
            <ButtonAddPot selectedTeam={team} />
        </section>
    );
};

export default TeamSelect;
