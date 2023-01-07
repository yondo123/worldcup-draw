import React, {useState, useEffect} from 'react';
import {continents, teams} from '../constants';
import {Continent} from '../types';
const TeamSelect = () => {
    const [availableContinents, setAvailableContinents] = useState(continents);
    const [continent, setContinent] = useState(continents[0].code);
    const [availableTeams, setAvailableTeams] = useState(
        teams.filter((item) => {
            return item.continent === continent;
        })
    );

    useEffect(() => {
        setAvailableTeams(filterAvailableTeams(continent));
    }, [continent]);

    const filterAvailableTeams = (continentCode: Continent) => {
        return teams.filter((item) => {
            return item.continent === continentCode;
        });
    };

    const handleChangeContiniet = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const {value} = e.target;
        setContinent(value as Continent);
    };

    return (
        <section className="filter">
            <div className="select-wrap">
                <label htmlFor="country">
                    <strong>Continent</strong>
                </label>
                <select id="country" onChange={handleChangeContiniet}>
                    {availableContinents.map((item) => {
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
                <select id="country">
                    {availableTeams.map((item) => {
                        return (
                            <option key={item.code} value={item.code}>
                                {item.name}
                            </option>
                        );
                    })}
                </select>
            </div>
            <button type="button" className="btn-add">
                ADD
            </button>
        </section>
    );
};

export default TeamSelect;
