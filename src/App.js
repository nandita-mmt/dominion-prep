import logo from './logo.svg';
// import Header from './Header';
import Header from './Components/Header/Header';
import Body from './Pages/Body/Body';
import Footer from './Components/Footer/Footer';
import './App.scss';


// to write common sections 

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
      
    </div>
  );
}

export default App;
