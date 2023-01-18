import React from 'react';
import {Box, Container, CssBaseline, useTheme} from '@mui/material';
import Header from './components/Header';
import TeamSelect from './components/TeamSelect';
import ButtonAddTeams from './components/ButtonAddTeams';
import Groups from './components/Groups';

function App() {
    const theme = useTheme();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth={'sm'}>
                <Box bgcolor={theme.status.background} px={'16px'}>
                    <Header />
                    <TeamSelect />
                    <ButtonAddTeams />
                    <main>
                        <Groups />
                    </main>
                </Box>
            </Container>
        </React.Fragment>
    );
}
export default App;
