import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout';
function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div id="bodyId">
          <Layout />
        </div>
      </div>
    </Router>
  );
}
export default App;