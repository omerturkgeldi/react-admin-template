import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { useState } from 'react';
import Login from './pages/Login/Login';


function App() {
  const [token, setToken] = useState();

  if(token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div id="bodyId" style={{marginTop:'130px'}}>
          <Layout />
        </div>
      </div>
    </Router>
  );
}
export default App;