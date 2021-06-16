import './App.css';
import Home from './components/Home/home';
import CharactersListContainer from './containers/ItemListContainer/CharactersListContainer';

function App() {
  return (
    <div className="App">
     <Home />
     <CharactersListContainer />
    </div>
  );
}

export default App;
