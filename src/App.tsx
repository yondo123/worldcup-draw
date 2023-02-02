import Header from './components/Header';
import ButtonAddTeams from './components/ButtonAddTeams';
import Groups from './components/Groups';
import SelectWrap from './components/Select/SelectWrap';

function App() {
    return (
        <div className="App">
            <Header />
            <SelectWrap />
            <ButtonAddTeams />
            <main>
                <Groups />
            </main>
        </div>
    );
}

export default App;
