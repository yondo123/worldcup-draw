import React, {useCallback, useState, useEffect} from 'react';
import {Continent, Team} from '../types';
import {removeTeam} from '../actions/teams';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store';
import {addTeamToPot, setPot} from '../actions/pots';
import {numberOfGroup, pots} from '../constants';

interface PropsType {
    selectedTeam: Team;
    continent: Continent;
}
const ButtonAddPot = (props: PropsType) => {
    const dispatch = useDispatch();
    const potOfTeams = useSelector((state: RootState) => state.Pots.teams);
    const pot = useSelector((state: RootState) => state.Pots.currentPot);
    const [addCount, setAddCount] = useState(0);

    useEffect(() => {
        if (!addCount || addCount >= numberOfGroup * pots.length) {
            return;
        }
        if (addCount && !potOfTeams.length) {
            switch (pot.code) {
                case pots[0].code:
                    dispatch(setPot(pots[1]));
                    return;
                case pots[1].code:
                    dispatch(setPot(pots[2]));
                    return;
                case pots[2].code:
                    dispatch(setPot(pots[3]));
                    return;
                default:
                    dispatch(setPot(pots[0]));
                    return;
            }
        }
    }, [addCount]);

    const handleAddTeam = useCallback(() => {
        dispatch(removeTeam(props.selectedTeam));
        dispatch(addTeamToPot(props.selectedTeam));
        setAddCount((prevCount) => ++prevCount);
    }, [props.selectedTeam]);
    return (
        <button type="button" className="btn-add" onClick={handleAddTeam} disabled={addCount >= 32 || potOfTeams.length === numberOfGroup}>
            ADD {pot.code.toUpperCase()} POT
        </button>
    );
};

export default React.memo(ButtonAddPot);
