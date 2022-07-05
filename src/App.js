import Dados01 from './componentes/Dados01';
import './App.css';
import Dados02 from './componentes/Dados02';
import Header from './componentes/Header';
import Dados03 from './componentes/Dados03';

function App() {
  return (
    <div className="App">
        <Header />
        <div className='center'>
          <Dados01 />
          <Dados02 />
          <Dados03 />
        </div>
    </div>
  );
}

export default App;
