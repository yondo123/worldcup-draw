import React, {useEffect, useState} from 'react';
import {Continent, Team, Teams} from '../../types';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {continents} from '../../constants';

const useSelect = () => {
    const teams: Teams = useSelector((state: RootState) => state.teamReducer);
    const continentLimit = useSelector((state: RootState) => state.continentReducer);
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

    return {teams, continent, continentLimit, handleChangeTeam, handleChangeContinent};
};

export default useSelect;
