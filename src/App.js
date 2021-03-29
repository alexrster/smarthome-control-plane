import './App.css';
import Dashboard from './components/Dashboard.js';
import { Connector } from 'react-mqtt';

function App() {
  return (
    <Connector mqttProps="ws://10.9.9.96:1889">
      <div className="App">
        <Dashboard />
      </div>
    </Connector>
  );
}

export default App;
