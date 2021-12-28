import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import useFirebase from './firebase/useFirebase';

function App() {

  const {googleSignIn, user, logOut} = useFirebase();
  

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="products" element={<h1> This is Products! Thanks</h1>} />
          <Route path="blog" element={<h1>Hi there</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
