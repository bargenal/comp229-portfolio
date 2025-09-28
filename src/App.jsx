import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter.jsx';

const App = () => {
  return (
    <Router basename="/comp229-portfolio">
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#000000', 
        color: '#f3f4f6'
      }}>
        <MainRouter />
      </div>
    </Router>
  );
};

export default App;