import React from 'react';
import {Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material';
import {Group, Teams} from '../types';

interface PropsType {
    groupName: Group;
    teams: Teams;
}
const GroupItem = (props: PropsType) => {
    const {groupName, teams} = props;

    return (
        <Box mt="16px">
            <Typography variant="h6">Group {groupName}</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Team</TableCell>
                            <TableCell align="center">Container</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">{teams.length ? teams[0].name : ''}</TableCell>
                            <TableCell align="center">{teams.length ? teams[0].continent.toUpperCase() : ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">{teams.length >= 2 ? teams[1].name : ''}</TableCell>
                            <TableCell align="center">{teams.length >= 2 ? teams[1].continent.toUpperCase() : ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">{teams.length >= 3 ? teams[2].name : ''}</TableCell>
                            <TableCell align="center">{teams.length >= 3 ? teams[2].continent.toUpperCase() : ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">{teams.length >= 4 ? teams[3].name : ''}</TableCell>
                            <TableCell align="center">{teams.length >= 4 ? teams[3].continent.toUpperCase() : ''}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default GroupItem;
