import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import AppContext from './AppContext';

function App() {
  const [username, setUsername] = useState('Trevor');
  const contextValue = useMemo(() => ({ username, setUsername }), [username]);
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div className="App">
      <AppContext.Provider value={contextValue}>
        <QueryClientProvider client={client}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home username={username} />} />
              <Route path="/profile" element={<Profile username={username} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
