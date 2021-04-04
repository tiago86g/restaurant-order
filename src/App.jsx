import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Meal } from './pages/Meal';
import { Drink } from './pages/Drink';
import { Checkout } from './pages/Checkout';
import { Receipt } from './pages/Receipt';
import { Navbar } from './components';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/meal" exact component={Meal} />
          <Route path="/drink" exact component={Drink} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/receipt" exact component={Receipt} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
