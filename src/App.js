import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <Header />
      <div className='App__box'>
      <Sidebar />
      <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
