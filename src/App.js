
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddBooks from './components/AddBooks';
import DeleteBooks from './components/DeleteBooks';
import SearchBooks from './components/SearchBooks';
import Viewall from './components/Viewall';

function App() {
  return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<AddBooks/>}/>
            <Route path="/search" element={<SearchBooks/>}/>
            <Route path="/delete" element={<DeleteBooks/>}/>
            <Route path="/viewall" element={<Viewall/>}/>
        </Routes>
        </BrowserRouter>
  );
}

export default App;
