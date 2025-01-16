import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GroupDetail from './pages/GroupDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContext } from './GlobalContext';
import { useState } from 'react';

function App() {
  const [string, setString] = useState('');

  return (
    <GlobalContext.Provider value={{ string, setString }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<GroupDetail />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
