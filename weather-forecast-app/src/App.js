import './App.css'
import Display from './components/Display';
import { ApiProvider } from './context/ApiContext';

/** @Note: weather data get by https://api.weatherbit.io/  */

function App() {

  return (
     <ApiProvider>
        <Display />
     </ApiProvider>
  );
}

export default App;
