import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Create from './components/Create';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import Main from './components/Main';
import Note from './components/Note';
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
