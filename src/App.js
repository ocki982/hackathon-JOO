import './App.scss';
import { Route, Switch, BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import HomePage from './pages/HomePage/HomePage';
import DrinkPage from './pages/DrinkPage/DrinkPage';
import CityPage from './pages/CityPage/CityPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>          
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/city" component={CityPage} />
          <Route exact path="/drink/:id" component={DrinkPage} />
        </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
