// React Router imports
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter.jsx';

// Main App - wraps the entire application with routing
const App = () => {
  return (
    // Router with basename for GitHub Pages repository deployment
    <Router basename="/comp229-portfolio">
      {/* Main app container with dark background and light text */}
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#000000', 
        color: '#f3f4f6'
      }}>
        {/* Main router that handles all of the page routing */}
        <MainRouter />
      </div>
    </Router>
  );
};

export default App;