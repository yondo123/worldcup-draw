import React from 'react';
import {Flex, Box, Image} from '@chakra-ui/react';
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
        <Flex mt={'24px'}>
            {pots.teams.map((team: Team, index: number) => {
                return (
                    <Box key={team.code} _notFirst={{ml: '8px'}}>
                        <button type="button" onClick={handleAddGroup.bind(null, index)}>
                            <Image src={require('../assets/ball.png')} alt={'add-team-button'} rounded={'full'} boxSize={'24px'} border={'2px'} borderColor={'draw.main'} />
                        </button>
                    </Box>
                );
            })}
        </Flex>
    );
};

export default ButtonAddTeams;
