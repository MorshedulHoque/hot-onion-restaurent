import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Food from './Components/Food/Food';
import Choose from './Components/Choose/Choose';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Food></Food>
      <Choose></Choose>
      <Footer></Footer>
    </div>
  );
}

export default App;
