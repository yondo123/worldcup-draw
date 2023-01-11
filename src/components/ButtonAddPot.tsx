import React, {useCallback, useState, useEffect} from 'react';
import {Continent, Team} from '../types';
import {removeTeam} from '../actions/teams';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store';
import {addTeamToPot} from '../actions/pots';
import {numberOfGroup, pots} from '../constants';

interface PropsType {
    selectedTeam: Team;
    continent: Continent;
}
const ButtonAddPot = (props: PropsType) => {
    const dispatch = useDispatch();
    const groupPots = useSelector((state: RootState) => state.Pots);
    const [pot, setPot] = useState(pots[0]);
    const [addCount, setAddCount] = useState(0);

    useEffect(() => {
        const nextPotIndex = Math.floor(addCount / numberOfGroup);

        if (!addCount || addCount >= numberOfGroup * pots.length) {
            return;
        }

        if (groupPots[pot.code].length) {
            setPot(pots[nextPotIndex]);
            return;
        }

        setPot(pots[nextPotIndex - 1]);
    }, [groupPots]);

    const handleAddTeam = useCallback(() => {
        dispatch(removeTeam(props.selectedTeam));
        dispatch(
            addTeamToPot({
                pot: pot.code,
                team: props.selectedTeam
            })
        );
        setAddCount((prevState) => prevState + 1);
    }, [props.selectedTeam]);
    return (
        <button type="button" className="btn-add" onClick={handleAddTeam} disabled={addCount > 32}>
            ADD {pot.code.toUpperCase()} POT
        </button>
    );
};

export default React.memo(ButtonAddPot);
