import React from 'react';
import {OrderedList} from '@chakra-ui/react';
import {shallowEqual, useSelector} from 'react-redux';
import {RootState} from '../store';
import GroupItem from './GroupItem';

const Groups = () => {
    const groups = useSelector((state: RootState) => state.groupReducer, shallowEqual);

    return (
        <OrderedList styleType={'none'} pb={'24px'} m={0}>
            {Object.entries(groups).map((group: any) => {
                return <GroupItem key={group[0]} groupName={group[0]} teams={group[1]} />;
            })}
        </OrderedList>
    );
};

export default Groups;
