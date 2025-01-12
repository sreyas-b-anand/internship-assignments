
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from '../components/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <ToastContainer />
    </div>
  );
}

export default App;

