import './App.css';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>          
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/citypage" component={citypage} />
          <Route exact path="/drinkpage/:id" component={drinkpage} />
        </Switch>
      </BrowserRouter>
 

    </div>
  );
}

export default App;
