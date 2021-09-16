import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Create from './components/Create/Create';
import About from './components/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import Main from './components/Main/Main';
import Note from './components/Note/Note';
import Login from './components/Auth/Login/Login';
import Registration from './components/Auth/Registration/Registration';
import './App.css';



function App() {
  return (
    <div className="main">
        <Router>
            <Header></Header>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/about' component={About}/>
                <Route path='/create' component={Create}/>
                <Route path='/login' component={Login}/>
                <Route path='/registration' component={Registration}/>
                <Route exact path='/note/' component={Note}/>
                <Route exact path='/note/:noteURL' component={Note}/>
                <Route path='/error' component={Error}/>
            </Switch>
        </Router>
        <Footer></Footer>
     
    </div>
  );
}

export default App;
