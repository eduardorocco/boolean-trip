import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GroupDetail from './pages/GroupDetail'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/:id' element={<GroupDetail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
