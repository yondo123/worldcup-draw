import React, {useState, useEffect} from 'react';
import {Box, Select, Text} from '@chakra-ui/react';
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
        <Box>
            <Box mt={'8px'}>
                <Text size={'lg'} as={'b'} color={'draw.font'}>
                    Continent
                </Text>
                <Select size={'md'} onChange={handleChangeContinent}>
                    {continents.map((continent) => {
                        return (
                            <option key={continent.code} value={continent.code}>
                                {continent.name} ({continent.code.toUpperCase()})
                            </option>
                        );
                    })}
                </Select>
            </Box>
            <Box mt={'8px'}>
                <Text size={'lg'} as={'b'} color={'draw.font'}>
                    Country
                </Text>
                <Select id={'country'} onChange={handleChangeTeam} disabled={continentLimit[continent] < 1}>
                    {teams
                        .filter((team) => team.continent === continent)
                        .map((team) => {
                            return (
                                <option key={team.code} value={team.code}>
                                    {team.name}
                                </option>
                            );
                        })}
                </Select>
            </Box>
            <ButtonAddPot selectedTeam={team} continent={continent} />
        </Box>
    );
};

export default TeamSelect;
