import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import landing from 'pages/landing';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={landing}>

        </Route>
      </Router>
    </div>
  );
}

export default App;
