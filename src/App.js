import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Details from "./pages/Details";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home}></Route>
      <Route path="/details" exact component={Details}></Route>
      <Footer />
    </Router>
  );
}

export default App;
