import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GroupDetail from './pages/GroupDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContext } from './GlobalContext';
import { useState } from 'react';
import viaggi from './data/data.js';

function App() {
  const [string, setString] = useState('');

  const [viaggiFinali, setViaggiFinali] = useState(viaggi);
  const [personeReattive, setPersoneReattive] = useState([]);

  return (
    <GlobalContext.Provider value={{ string, setString, viaggiFinali, setViaggiFinali, personeReattive, setPersoneReattive }}>
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
