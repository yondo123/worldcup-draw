import React, {useState, useEffect} from 'react';
import {Select} from 'antd';
import {continents} from '../constants';
import {Continent, Team, Teams} from '../types';
import ButtonAddPot from './ButtonAddPot';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

const TeamSelect = () => {
    const teams: Teams = useSelector((state: RootState) => state.teamReducer);
    const continentLimit = useSelector((state: RootState) => state.continentReducer);
    const [continent, setContinent] = useState(continents[0].code);
    const [team, setTeam] = useState(teams[0]);

    useEffect(() => {
        const firstTeam = teams.find((team) => team.continent === continent);
        setTeam(firstTeam || teams[0]);
    }, [continent, teams]);

    const handleChangeContinent = (selectedContinent: Continent) => {
        setContinent(selectedContinent);
    };

    const handleChangeTeam = (selectedTeam: string) => {
        const selectTeam = teams.find((item) => item.code === selectedTeam);
        setTeam(selectTeam as Team);
    };

    return (
        <section className="filter">
            <div className="select-wrap">
                <label htmlFor="continent">
                    <strong>Continent</strong>
                </label>
                <Select
                    id="continent"
                    style={{width: 256}}
                    defaultValue={continents[0].code}
                    onChange={handleChangeContinent}
                    options={continents.map((continent) => ({label: continent.name, value: continent.code}))}
                />
            </div>
            <div className="select-wrap">
                <label htmlFor="country">
                    <strong>Country</strong>
                </label>
                <Select
                    id="country"
                    style={{width: 256}}
                    disabled={continentLimit[continent] < 1}
                    value={team.name}
                    onChange={handleChangeTeam}
                    options={teams.filter((team) => team.continent === continent).map((team) => ({label: team.name, value: team.code}))}
                />
            </div>
            <ButtonAddPot selectedTeam={team} continent={continent} />
        </section>
    );
};

export default TeamSelect;
