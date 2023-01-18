import React, {useState, useEffect} from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, useTheme} from '@mui/material';
import {continents} from '../constants';
import {Continent, Team, Teams} from '../types';
import ButtonAddPot from './ButtonAddPot';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

const TeamSelect = () => {
    const theme = useTheme();
    const teams: Teams = useSelector((state: RootState) => state.teamReducer);
    const continentLimit = useSelector((state: RootState) => state.continentReducer);
    const [continent, setContinent] = useState(continents[0].code);
    const [team, setTeam] = useState(teams[0]);

    useEffect(() => {
        const firstTeam = teams.find((team) => team.continent === continent);
        setTeam(firstTeam || teams[0]);
    }, [continent, teams]);

    const handleChangeContinent = (e: SelectChangeEvent) => {
        const {value} = e.target;
        setContinent(value as Continent);
    };

    const handleChangeTeam = (e: SelectChangeEvent) => {
        const {value} = e.target;
        const selectTeam = teams.find((item) => item.code === value);
        setTeam(selectTeam as Team);
    };

    return (
        <Box color={theme.status.subFont} textAlign="center">
            <FormControl fullWidth variant="standard" sx={{mt: '8px', width: '256px'}}>
                <InputLabel id="continent">Continent</InputLabel>
                <Select labelId="continent" label={continents[0].name} value={continent} onChange={handleChangeContinent}>
                    {continents.map((continent) => {
                        return (
                            <MenuItem key={continent.code} value={continent.code}>
                                {continent.name}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
            <FormControl variant="standard" sx={{mt: '8px', width: '256px'}} disabled={continentLimit[continent] < 1}>
                <InputLabel id="country">Country</InputLabel>
                <Select labelId="country" label={teams[0].name} value={team.code} onChange={handleChangeTeam}>
                    {teams
                        .filter((team) => team.continent === continent)
                        .map((team) => {
                            return (
                                <MenuItem key={team.code} value={team.code}>
                                    {team.name}
                                </MenuItem>
                            );
                        })}
                </Select>
            </FormControl>
            <ButtonAddPot selectedTeam={team} continent={continent} />
        </Box>
    );
};

export default TeamSelect;
