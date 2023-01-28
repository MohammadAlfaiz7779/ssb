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
import Blogdetail from './Pages/Blogdetail';
import Apparel from './Pages/Apparel';
import Accessories from './Pages/Accessories';
import Topbar from './Component/Topbar';
import ToolsHome from './Pages/ToolsHome';
import Kitchen from './Pages/Kitchen';
import Productdetail from './Pages/Productdetail';


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
          path='Blog-detail'
          element={
            <Blogdetail/>
          } />
          <Route
          path='*'
          element={
            <Error/>
          } />
          <Route
          path='Apparel'
          element={
            <Apparel/>
          } />
          <Route
          path='Accessories'
          element={
            <Accessories/>
          } />
          <Route
          path='Tools&Home'
          element={
            <ToolsHome/>
          } />
          <Route
          path='Kitchen'
          element={
            <Kitchen/>
          } />
          <Route
          path='productdetail'
          element={
            <Productdetail/>
          } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
