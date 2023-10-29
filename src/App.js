import logo from './logo.svg';
import './App.css';
import { Hero } from './views/Hero';
import { Services } from './views/Services';
import { Products } from './views/Products';

function App() {
  return (
    <>
      <Hero/>
      <Services/>
      <Products/>
    </>
  );
}

export default App;
