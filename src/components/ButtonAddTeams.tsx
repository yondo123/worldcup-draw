import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {Team} from '../types';
import {deleteTeamFromPot} from '../actions/pots';
import {groupNames} from '../constants';
import {addTeamToGroup} from '../actions/groups';
import {decreaseContinent} from '../actions/continents';

const ButtonAddTeams = () => {
    const pots = useSelector((state: RootState) => state.potReducer);
    const groups = useSelector((state: RootState) => state.groupReducer);
    const dispatch = useDispatch();

    const handleAddGroup = (index: number) => {
        const team = pots.teams[index];

        for (let i = 0; i < groupNames.length; i++) {
            const groupName = groupNames[i];
            const targetGroup = groups[groupName];
            const sameContinentLength = targetGroup.filter((existTeam) => existTeam.continent === team.continent).length;
            const isAddPossible = team.continent === 'uefa' ? sameContinentLength < 2 : sameContinentLength < 1;

            if (isAddPossible && targetGroup.length < pots.currentPot.maxOfGroupTeams) {
                dispatch(decreaseContinent(team.continent));
                dispatch(addTeamToGroup({team, group: groupName}));
                dispatch(deleteTeamFromPot(index));
                break;
            }
        }
    };

    return (
        <section>
            <ul className="button-wrap">
                {pots.teams.map((team: Team, index: number) => {
                    return (
                        <li key={team.code}>
                            <button type="button" onClick={handleAddGroup.bind(null, index)}>
                                <img src={require('../assets/ball.png')} alt="add team button" />
                            </button>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default ButtonAddTeams;
