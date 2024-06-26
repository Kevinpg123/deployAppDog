import {Route, Switch} from 'react-router-dom'

import './App.css';
import Home from './views/home/Home';
import Landing from './views/landing/Landing';
import Detail from './views/detail/Detail';
import Form from './views/form/Form';
import NavBar from './components/navBar/NavBar';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import About from './views/about/About';
import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:3001/'
axios.defaults.baseURL = 'https://deployappdog.onrender.com'

function App() {

  const location = useLocation()



  return (
    <div className="App">
      
      <>
          <NavBar/>
          </>
      <Switch>
        
      <Route exact path="/" component={Landing} />
      
      <Route path="/home" component={Home} />
        
      <Route path="/detail/:id" component={Detail} />
        <Route path="/form" component={Form} />
        <Route path="/about" component={About} />
      
      </Switch>
      
      


      
    </div>
  );
}

export default App;
