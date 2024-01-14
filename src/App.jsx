import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import EventPage from "./pages/screens/EventPage";
import CollabPage from "./pages/screens/CollabPage";
import GuidePage from "./pages/screens/GuidePage";
import TeamPage from "./pages/screens/TeamPage";
import Home from "./Home";
import RegistrationPage from "./pages/Register";

function App() {  
  return (
    <Router>
      <div className="container" style={{ height: "100%" }}>
      <div className="grain-overlay"></div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/EventPage" component={PageWrapper(EventPage)} />
          <Route path="/CollabPage" component={PageWrapper(CollabPage)} />
          <Route path="/GuidePage" component={PageWrapper(GuidePage)} />
          <Route path="/TeamPage" component={PageWrapper(TeamPage)} />
          <Route path="/Register" component={RegistrationPage} />
        </Switch>
      </div>
    </Router>
  );
}

function PageWrapper(Component) {
  return function WrappedComponent(props) {
    const history = useHistory();
    const [animationClass, setAnimationClass] = React.useState('swoosh-in');
  
    const closePage = () => {
      setAnimationClass('swoosh-out');
      setTimeout(() => history.push('/'), 600);
    };

    React.useEffect(() => {
      setTimeout(() => setAnimationClass('swoosh-in'), 100);
      return () => setAnimationClass('swoosh-out');
    }, []);
    
    return (
      <div className={`fullscreen ${animationClass}`}>
        <Component togglePopup={closePage} {...props} />
      </div>
    );
  };
}


export default App;
