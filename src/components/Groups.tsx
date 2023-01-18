import React from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {RootState} from '../store';
import GroupItem from './GroupItem';
import {Stack} from '@mui/material';

const Groups = () => {
    const groups = useSelector((state: RootState) => state.groupReducer, shallowEqual);

    return (
        <Stack sx={{mt: '24px'}}>
            {Object.entries(groups).map((group: any) => {
                return <GroupItem key={group[0]} groupName={group[0]} teams={group[1]} />;
            })}
        </Stack>
    );
};

export default Groups;
