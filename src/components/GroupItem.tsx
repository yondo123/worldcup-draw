import React from 'react';
import {Group, Teams} from '../types';
import {Heading, Table, Tbody, Tr, Th, Td, Thead, HStack, Image, Box, ListItem, Text, TableContainer} from '@chakra-ui/react';

interface PropsType {
    groupName: Group;
    teams: Teams;
}
const GroupItem = (props: PropsType) => {
    const {groupName, teams} = props;

    return (
        <ListItem mt={'16px'}>
            <Box boxShadow={'base'} rounded={'base'} py={'16px'} px={'8px'}>
                <Heading size={'md'} color={'draw.sub-font'}>
                    Group {groupName}
                </Heading>
                <TableContainer>
                    <Table width={'100%'} mt={'16px'} size={'sm'}>
                        <Thead>
                            <Tr>
                                <Th>Team</Th>
                                <Th>Continent</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <HStack>
                                        <Image src={'https://bit.ly/dan-abramov'} borderRadius={'full'} boxSize={'32px'} />
                                        <Text fontStyle={'lg'}>{teams.length ? teams[0].name : ''}</Text>
                                    </HStack>
                                </Td>
                                <Td>{teams.length ? teams[0].continent.toUpperCase() : ''}</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <HStack>
                                        <Image src={'https://bit.ly/dan-abramov'} borderRadius={'full'} boxSize={'32px'} />
                                        <Text fontSize={'xs'}>{teams.length >= 2 ? teams[1].name : ''}</Text>
                                    </HStack>
                                </Td>
                                <Td>{teams.length >= 2 ? teams[1].continent.toUpperCase() : ''}</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <HStack>
                                        <Image src={'https://bit.ly/dan-abramov'} borderRadius={'full'} boxSize={'32px'} />
                                        <Text fontSize={'xs'}>{teams.length >= 3 ? teams[2].name : ''}</Text>
                                    </HStack>
                                </Td>
                                <Td>{teams.length >= 3 ? teams[2].continent.toUpperCase() : ''}</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <HStack>
                                        <Image src={'https://bit.ly/dan-abramov'} borderRadius={'full'} boxSize={'32px'} />
                                        <Text fontSize={'xs'}>{teams.length >= 4 ? teams[3].name : ''}</Text>
                                    </HStack>
                                </Td>
                                <Td>{teams.length >= 4 ? teams[3].continent.toUpperCase() : ''}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </ListItem>
    );
};

export default GroupItem;
