import logo from './logo.svg';
import './App.css';
import { Clock } from './components/clock';

function App() {
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 m-0 p-0 relative h-screen flex justify-center items-center gap-16 flex-col'>
      <Clock/>
    
    </div>
  );
}

export default App;
