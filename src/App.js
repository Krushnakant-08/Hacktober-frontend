import logo from './logo.svg';
import './App.css';
import HeroSection from './components/herosection';
import Navbar from './components/navbar';
import Contacts from './pages/contacts';

function App() {
  return (
   <>
   <Navbar/>
   <HeroSection/>
   <Contacts/>
   </>
  );
}

export default App;
