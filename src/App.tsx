import {Box} from '@chakra-ui/react';
import Header from './components/Header';
import TeamSelect from './components/TeamSelect';
import ButtonAddTeams from './components/ButtonAddTeams';
import Groups from './components/Groups';
function App() {
    return (
        <div className="App">
            <Box maxW={'640px'} mx={'auto'} bg={'whiteAlpha.800'} px={'16px'}>
                <Header />
                <TeamSelect />
                <ButtonAddTeams />
                <main>
                    <Groups />
                </main>
            </Box>
        </div>
    );
}

export default App;
