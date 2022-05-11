import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NoMatch from "./NoMatch";
import UserProfile from "./UserProfile";

function Home() {
  return <h1>Welcome to the home page</h1>;
}
function AboutSettings() {
  return <h1>About Settings</h1>;
}
function About() {
  return <h1>You are on the about page</h1>;
}
function Contact() {
  return <h1>Please feel free to email us</h1>;
}

// Route is like an `if` statement, matches and renders location inclusively, i.e. any route that has `/about`
// `path` property describes the URL this route will handle
// `exact` means exact={true} but looks like english
// Link is like anchor+href tag+attribute, often points to a route
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
                <Link to="/about-settings">About Settings</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        {Array(10) //Create an array of 10 empty items [ <10 empty items> ]
          .fill() //Fill the array items with undefined [undefined,undefined,...]
          .map((ignoreValue, index) => index + 1) //Make a new array with map that has indices as values[1,2...10]
          .map((id) => (//Create 10 `Link to` items on the page
            <div key={id}>
              <Link to={`/user/${id}`}>User {id}</Link>
            </div>
          ))}
        <main className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about-settings">
              <AboutSettings />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/user/:userId">
              <UserProfile />
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
