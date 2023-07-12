// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ProductListing from "./components/ProductListing"
import Header from './components/Header';
import './App.css'
import './index.css'
// import ProductDetails from "./components/productDetails";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import { Route, Routes } from 'react-router-dom'
import RegisterPage from './components/RegisterPage';

function App() {

  return (
    <>
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
    </div>
    </>
        
  )
}

export default App
