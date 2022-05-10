import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Home() {
  return <p>Home</p>;
}

function About() {
  return <p>About</p>;
}

function AboutSettings() {
  return <p>About Settings</p>;
}

// Route is like an `if` statement, matches and renders location inclusively, i.e. any route that has `/about`
// `exact` means exact={true} but looks like english
// Link is like anchor+href tag+attribute
// Switch renders the first child <Route> or <Redirect>,
//  that matches and renders a route exclusively.
//  For example, multiple `setting` routes, we might just want 1 setting route

function App() {
  return (
    <Router>
      <div className="App">
        <header className="container my-3">
          <h1>My App</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about/settings">
              <AboutSettings />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
