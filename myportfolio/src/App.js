import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/css/styles.css';
import Profile from './components/profile.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './components/home.js';

function App() {
  return (
    <Router>
      <div className='h-svh'>
        <Routes>
          <Route path="/" element={
            <>
              <Header header="Home"/>
              <Home />
              <Footer />
            </>
          }/>
        </Routes>
        <Routes>
          <Route path="/profile" element={
            <>
              <Header header="Profile"/>
              <Profile />
              <Footer />
            </>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
