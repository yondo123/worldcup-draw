import React, {useCallback} from 'react';
import {Team} from '../types';
import {removeTeam} from '../actions/teams';
import {useDispatch} from 'react-redux';

interface PropsType {
    selectedTeam: Team;
}
const ButtonAddPot = (props: PropsType) => {
    const dispatch = useDispatch();

    const handleAddTeam = useCallback(() => {
        console.log(props.selectedTeam);
        dispatch(removeTeam(props.selectedTeam));
    }, [props.selectedTeam]);
    return (
        <button type="button" className="btn-add" onClick={handleAddTeam}>
            ADD FIRST POT
        </button>
    );
};

export default React.memo(ButtonAddPot);
