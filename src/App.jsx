import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Dentist from "./Routes/Detail"
import Favs from "./Routes/Favs"

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/dentist" component={Dentist}/>
            <Route path="/favs" component={Favs}/>
          </Switch>
          <Footer/>
      </div>
      </Router>
  );
}

export default App;
