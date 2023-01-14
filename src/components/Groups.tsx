import React from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {RootState} from '../store';
import GroupItem from './GroupItem';

const Groups = () => {
    const groups = useSelector((state: RootState) => state.groupReducer, shallowEqual);

    return (
        <ol className="standings">
            {Object.entries(groups).map((group: any) => {
                return <GroupItem key={group[0]} groupName={group[0]} teams={group[1]} />;
            })}
        </ol>
    );
};

export default Groups;
