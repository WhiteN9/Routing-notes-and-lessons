import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NoMatch from "./NoMatch";

function Home() {
  return <h1>Welcome to the home page</h1>;
}
function About() {
  return <h1>You are on the about page</h1>;
}
function Contact() {
  return <h1>Please feel free to email us</h1>;
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
    <>
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
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </main>
      </div>
    </>
  );
}

export default App;
