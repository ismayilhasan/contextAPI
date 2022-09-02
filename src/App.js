import './App.scss';

import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Cards from './components/Cards';
import Home from './components/Home';
import Comments from './components/comments';
import {PostsProvider} from './context/Post';
function App() {
  return (
    <Router>
      <PostsProvider>
        <Switch>
          <Route path="/" exact >
          <Home/>  
          </Route>
          <Route path="/Cards" exact>
              <Cards/>
          </Route>
          <Route path="/Comments">
                <Comments />
          </Route>
        </Switch>
        </PostsProvider>
    </Router>
  );
}

export default App;
