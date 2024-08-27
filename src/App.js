import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddProduct/>}/>
      <Route path="/search" element={<SearchProduct/>}/>
      <Route path="/view" element={<ViewAll/>}/>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
