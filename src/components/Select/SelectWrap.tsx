import React from 'react';
import SelectTeam from './SelectTeam';
import SelectContinent from './SelectContinent';

const SelectWrap = () => {
    return (
        <section className="filter">
            <SelectContinent />
            <SelectTeam />
            {/*<ButtonAddPot selectedTeam={team} continent={continent} />*/}
        </section>
    );
};

export default SelectWrap;
