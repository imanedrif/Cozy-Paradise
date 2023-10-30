import './App.css';
import { Hero } from './views/Hero';
import { Services } from './views/Services';
import { Products } from './views/Products';
import { Reference } from './views/Reference';
import { Care } from './views/Care';

function App() {
  return (
    <>
      <Hero/>
      <Services/>
      <Products/>
      <Reference/>
      <Care/>
    </>
  );
}

export default App;
