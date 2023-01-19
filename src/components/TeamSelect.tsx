import React, {useState, useEffect} from 'react';
import {Listbox} from '@headlessui/react';
import {CheckIcon} from '@heroicons/react/20/solid';
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
        <section className="filter">
            <Listbox value={continent}>
                <Listbox.Label>Continent</Listbox.Label>
                <Listbox.Button className=" cursor-default rounded-lg bg-white py-2 px-3 pr-10">{continent}</Listbox.Button>
                <Listbox.Options>
                    {continents.map((continent) => {
                        return (
                            <Listbox.Option key={continent.code} value={continent.code} className="w-40">
                                {({active, selected}) => (
                                    <li className={`${active ? 'bg-blue-500 text-white' : 'bg-white text-black'} p-1 `}>
                                        {selected && <CheckIcon className="w-5 h-5" />}
                                        {continent.name}({continent.code.toUpperCase()})
                                    </li>
                                )}
                            </Listbox.Option>
                        );
                    })}
                </Listbox.Options>
            </Listbox>
            {/*<div className="select-wrap">*/}
            {/*    <label htmlFor="country">*/}
            {/*        <strong>Continent</strong>*/}
            {/*    </label>*/}
            {/*    <select id="country" onChange={handleChangeContinent}>*/}
            {/*        {continents.map((continent) => {*/}
            {/*            return (*/}
            {/*                <option key={continent.code} value={continent.code}>*/}
            {/*                    {continent.name} ({continent.code.toUpperCase()})*/}
            {/*                </option>*/}
            {/*            );*/}
            {/*        })}*/}
            {/*    </select>*/}
            {/*</div>*/}
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
            <ButtonAddPot selectedTeam={team} continent={continent} />
        </section>
    );
};

export default TeamSelect;
