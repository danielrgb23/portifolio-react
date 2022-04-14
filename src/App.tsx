import './App.scss';
import NavBar from './components/NavBar';
import HomePage from './pages/homepage';
import AboutPage from './pages/aboutpage';
import {Switch, Route} from 'react-router-dom';
import PortfoliosPage from './pages/portfoliospage';
import BlogsPage from './pages/blogspage';
import ContactPage from './pages/contactpage';



function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />  
      </div>
      <div className="main-content">
      <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            
            <Route path="/about" exact>
              <AboutPage />
            </Route>

            <Route path="/portfolios" exact>
              <PortfoliosPage />
            </Route>

            <Route path="/blogs" exact>
              <BlogsPage />
            </Route>

            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switch>
          </div> 
        </div>
    </div>
  );
}

export default App;
