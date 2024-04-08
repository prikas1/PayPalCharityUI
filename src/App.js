import Header from './components/Header';
import Middle from './components/Middle';
import Footer from './components/Footer';
import { Discription } from './components/Discription';
import "./App.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import PayPalQuality from './components/PayPal-Quality';


function App() {
  return (
        <div>
         <Header />
         <Middle />
         <PayPalQuality />
         <Discription />
         <Footer />
       </div>
  );
}

export default App;
