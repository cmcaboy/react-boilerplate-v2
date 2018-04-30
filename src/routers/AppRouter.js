import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import ProjectsPage from '../components/ProjectsPage';
import WorkPage from '../components/WorkPage';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import ResumeClicker from '../components/ResumeClicker';
import NotFoundPage from '../components/NotFoundPage';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

// Instead of BrowserRouter, we use the regular router,
// but we pass in a customer history to it.
const AppRouter = () => (
  <Router history={history}>
    <div className="container">
      <Header />
        <div className="content-container">
          <Switch>
              <Route path="/" component={LandingPage} exact={true} />
              <Route path="/projects" component={ProjectsPage} />
              <Route path="/work" component={WorkPage} />
              <Route path="/contact" component={ContactMe} />
              <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </div>
    </div>
  </Router>
);

export default AppRouter;
