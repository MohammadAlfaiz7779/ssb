import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Blog from "./Pages/Blog";
import Sidebar from './Component/Sidebar';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route
          path=''
          element={
            <Home />
          } />
          <Route
          path='Home'
          element={
            <Home />
          } />
        <Route
          path='Aboutus'
          element={
            <About />
          } />
        <Route
          path='Contactus'
          element={
            <Contact />
          } />
        <Route
          path='Login'
          element={
            <Login />
          } />
        <Route
          path='Cart'
          element={
            <Cart />
          } />
          <Route
          path='Blog'
          element={
            <Blog/>
          } />
          <Route
          path='*'
          element={
            <Error/>
          } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
