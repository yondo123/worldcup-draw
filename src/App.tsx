import Header from './components/Header';
import TeamSelect from './components/TeamSelect';
import ButtonAddTeams from './components/ButtonAddTeams';
import Groups from './components/Groups';

function App() {
    return (
        <div className="App">
            <Header />
            <TeamSelect />
            <ButtonAddTeams />
            <main>
                <Groups />
            </main>
        </div>
    );
}

export default App;
