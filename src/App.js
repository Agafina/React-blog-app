import { BrowserRouter as Router, Route , Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';
import DetailsBlog from './DetailsBlog';
import NotFound from './NotFound';



function App() {
  return (
    <Router>
    <div className='App'>
        <Navbar />
        <div className='content'>
         <Switch>
            <Route path exact ="/">
              <Home />
            </Route>
            <Route path  ="/create">
              <Create />
            </Route>
            <Route path  ="/blogs/:id">
            <DetailsBlog />
            </Route>
            <Route path = '*'>
              <NotFound />
            </Route>
         </Switch>
        </div>
    </div>
     </Router>
  );
}

export default App;
