
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';


function App() {
  return (
    <div className="app">

      <Router> 

       <Header />

          <Routes> 

            <Route path="/" element={<Home />} />

            <Route path="/search" element={<SearchPage />} />

          </Routes>

        <Footer />

      </Router>

    </div>
  );
}

export default App;
