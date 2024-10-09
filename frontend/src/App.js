import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/register" component= {Register} />
        <Route path="/login" component={Login} />
        
        </Routes>
    </Router>
  );
}

export default App;
