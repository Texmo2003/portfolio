import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/css/styles.css';
import Profile from './components/profile.js';
import Header from './components/header.js';
import Footer from './components/footer.js';

function App() {
  return (
    <Router>
      <div style={{ height: "100vh" }}>
        <Routes>
          <Route path="/" element={
            <>
              <Header header="Min profil"/>
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
